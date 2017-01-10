# config valid only for current version of Capistrano
lock "3.7.0"

set :application, "dev.dentist-data.fr"
set :repo_url, "git@github.com:DennisdeBest/DentistDataFront.git"

set :linked_dirs, %w{node_modules app/bower_components}

set :deploy_to, '/var/www/dev.dentist-data.fr'

#set :npm_target_path, -> { release_path.join('subdir') } # default not set

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
# set :deploy_to, "/var/www/my_app_name"

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# append :linked_files, "config/database.yml", "config/secrets.yml"

# Default value for linked_dirs is []
# append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system"

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
# set :keep_releases, 5

set :default_env, { 
  path: [
    "#{shared_path}/node_modules/bower/bin", 
    "$PATH"].join(":")
}



namespace :deploy do
  task :bower_and_npm_install do 
    on roles(:app), in: :sequence, wait: 5 do
      within release_path do 
        execute :npm, "install"
        execute :bower, "install"
        execute :gulp, "build"
      end
    end
  end
  after :published, :bower_and_npm_install
end

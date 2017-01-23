/*------------------------------------------------------------
   This file contains the script for the fist canvas.

	 * PainDiagram();
	 * void changeTab(event);
	 * void insertColor(pain = "", evaf = "", evap = "", date = "", quality = "", duration = "", frequency = "", why = "", mod_by = "", treatment = "", dnf = "0");
	 * void removeColor();
	 * void pop_dlr();
	 * void setDlrColor();
	 * void initDlr();
	 * void afterLoad();
	 * void touch_start(e);
	 * void touch_end(e);
	 * void touch_move(e);
	 * void setDlrTool(tool);
	 * void insert_dlr(pain, evaf, evap, date, quality, duration, frequency, why, mod_by, treatment, dnf);
	 * void mouseDownDlr(e);
	 * void mouseUpDlr(e);
	 * void mouseMoveDlr(e);
	 * void add_symbol(x, y);
	 * void draw_arrow(x1, y1, x2, y2);
	 * void redrawDlr();
	 * void clear_dlr();
	 * void openDN4(v);
	 * void HandlePopupResult(result, s_bitfield);
	 * void setDN4Fields(current);
	 * void compute_dn4();

------------------------------------------------------------*/

/* ---------------------- ELEMENTS ---------------------- */
$(document).ready(function () {
    var pDiagram = new PainDiagram();
    pDiagram.initDlr();

    function PainDiagram() {
        this.clr_tabs = document.getElementById('pain_clr');
        this.canvas = document.getElementById('cvsDlr');
        this.context = document.getElementById('cvsDlr').getContext("2d");

        this.a_Cross = new Array();
        this.a_Circle = new Array();
        this.a_Text = new Array();
        this.a_Arrow = new Array();

        this.colors = ["red", "blue", "yellow", "green", "cyan", "magenta"];
        this.current_color = 0;
        this.context.font = '18pt Calibri';
        this.context.lineWidth = 2;
        this.context.textAlign = 'center';
        this.context.textBaseline = 'middle';
        this.rect;
        this.tab_amount = 0;

        this.openedDN4 = -1;
        this.DN4_bitfields = new Array();

        /* ---------------------- TOOLS ---------------------- */
        this.tools = ["O", "X", "A", "T"]; //standing for circle, cross, arrow, text
        this.current_tool = "T";
        this.clic_pos = { x: 0, y: 0 };
        this.drag_pos = { x: 0, y: 0 };
        this.drag_enabled = false;


        this.dlrBg = new Image();
        this.DN4Current = 0;

        //this.m_postData = new Array(6);

        this.changeTab = function (event) {
            event = event || window.event;
            var current_tab = event.target || event.srcElement;
            for (i = 0; i < this.clr_tabs.childElementCount; ++i) {
                if (current_tab == this.clr_tabs.children[i]) {
                    this.clr_tabs.children[this.current_color].style.width = "30px";
                    current_tab.style.width = "35px";
                    this.current_color = i;
                    return;
                }
            }
        }
        this.ul = document.getElementById('pain_clr');
        this.ul.addEventListener("click", this.changeTab.bind(this), false);
        /*this.ul.onclick = function(event)
        {
            event = event || window.event;
            var current_tab = event.target || event.srcElement;
            
            //if (current_tab == clr_tabs.lastChild)
            //{
            //    insertColor();
            //    return;
            //}
            for (i = 0 ; i < this.clr_tabs.childElementCount ; ++i)
                if (current_tab == this.clr_tabs.children[i])
                {
                    this.clr_tabs.children[this.current_color].style.width = "30px";
                    current_tab.style.width = "35px";
                    this.current_color = i;
                    return;
                }
        };*/

        this.insertColor = function (pain = "", evaf = "", evap = "", date = "", quality = "", duration = "", frequency = "", why = "", mod_by = "", treatment = "", dnf = "0") {
            if (this.tab_amount < this.colors.length) {
                var tag = document.createElement("li");
                tag.style.background = this.colors[this.tab_amount];
                this.clr_tabs.appendChild(tag);
                ++this.tab_amount;
                if (date == "") pain = "";
                this.insert_dlr(pain, evaf, evap, date, quality, duration, frequency, why, mod_by, treatment, dnf);
            }
        }

        this.removeColor = function () {
            if (this.tab_amount > 1) {
                for (i = 0; i < this.a_Arrow.length; ++i) {
                    if (this.a_Arrow[i].color == this.colors[this.tab_amount - 1]) {
                        this.a_Arrow.splice(i, 1);
                        i--;
                    }
                }
                for (i = 0; i < this.a_Circle.length; ++i) {
                    if (this.a_Circle[i].color == this.colors[this.tab_amount - 1]) {
                        this.a_Circle.splice(i, 1);
                        i--;
                    }
                }
                for (i = 0; i < this.a_Cross.length; ++i) {
                    if (this.a_Cross[i].color == this.colors[this.tab_amount - 1]) {
                        this.a_Cross.splice(i, 1);
                        i--;
                    }
                }
                for (i = 0; i < this.a_Text.length; ++i) {
                    if (this.a_Text[i].color == this.colors[this.tab_amount - 1]) {
                        this.a_Text.splice(i, 1);
                        i--;
                    }
                }

                if (this.current_color == this.tab_amount) {
                    this.current_color--;
                }

                this.clr_tabs.removeChild(document.getElementById('pain_clr').lastChild);
                document.getElementById('pain_stack').removeChild(document.getElementById('pain_stack').lastChild);
                --this.tab_amount;

                this.DN4_bitfields.pop();

                this.redrawDlr();
            }
        }

        this.pop_dlr = function () {
            switch (this.current_tool) {
                case "O":
                    {
                        this.a_Circle.pop();
                        break;
                    }
                case "X":
                    {
                        this.a_Cross.pop();
                        break;
                    }
                case "A":
                    {
                        this.a_Arrow.pop();
                        break;
                    }
                case "T":
                    {
                        this.a_Text.pop();
                        break;
                    }
            }
            redrawDlr();
        }


        this.setDlrColor = function () {
            current_color = document.getElementById("dlrColor").value;
        }

        this.initDlr = function () {
            //this.clr_tabs.innerHTML += '<li style="background:' + this.colors[0] + ';"></li>';
            //this.clr_tabs.children[0].style.width = "35px";

            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                this.canvas.addEventListener("touchstart", this.touch_start.bind(this), false);
                this.canvas.addEventListener("touchend", this.touch_end.bind(this), false);
                this.canvas.addEventListener("touchmove", this.touch_move.bind(this), false);
            }
            else {
                this.canvas.addEventListener("mousedown", this.mouseDownDlr.bind(this), false);
                this.canvas.addEventListener("mouseup", this.mouseUpDlr.bind(this), false);
                this.canvas.addEventListener("mousemove", this.mouseMoveDlr.bind(this), false);
            }
            this.dlrBg.src = "assets/images/canvas.png";
            this.dlrBg.onload = this.afterLoad.bind(this);
        }

        this.afterLoad = function () {
            this.redrawDlr();

            //this.insert_dlr("", "", "", "", "", "", "", "", "", "", "0");


            document.getElementById('X').addEventListener("click", this.setDlrTool.bind(this, "X"), false);
            document.getElementById('O').addEventListener("click", this.setDlrTool.bind(this, "O"), false);
            document.getElementById('A').addEventListener("click", this.setDlrTool.bind(this, "A"), false);
            document.getElementById('T').addEventListener("click", this.setDlrTool.bind(this, "T"), false);
            document.getElementById('EA').addEventListener("click", this.clear_dlr.bind(this), false);
            document.getElementById('EF').addEventListener("click", this.pop_dlr.bind(this), false);
            document.getElementById('AC').addEventListener("click", this.insertColor.bind(this), false);
            document.getElementById('RC').addEventListener("click", this.removeColor.bind(this), false);
            document.getElementById('AC_e').addEventListener("click", this.insertColor.bind(this), false);
            document.getElementById('RC_e').addEventListener("click", this.removeColor.bind(this), false);
        }

        this.touch_start = function (e) {
            if (this.current_tool == "A") {
                this.rect = this.canvas.getBoundingClientRect();
                this.clic_pos.x = e.targetTouches[0].clientX - this.rect.left;
                this.clic_pos.y = e.targetTouches[0].clientY - this.rect.top;
                this.drag_enabled = true;
            }
        }
        this.touch_end = function (e) {

            this.rect = this.canvas.getBoundingClientRect();
            this.drag_pos.x = e.changedTouches[0].clientX - this.rect.left;
            this.drag_pos.y = e.changedTouches[0].clientY - this.rect.top;
            this.add_symbol(this.drag_pos.x, this.drag_pos.y);
        }
        this.touch_move = function (e) {
            e.preventDefault();
            if (this.drag_enabled && this.current_tool == "A") {
                this.rect = this.canvas.getBoundingClientRect();
                this.drag_pos.x = e.changedTouches[0].clientX - this.rect.left;
                this.drag_pos.y = e.changedTouches[0].clientY - this.rect.top;
                this.redrawDlr();
            }
        }

        this.setDlrTool = function (tool) {
            this.current_tool = tool;
        }

        this.insert_dlr = function (pain, evaf, evap, date, quality, duration, frequency, why, mod_by, treatment, dnf) {
            inner = document.createElement('div');
            inner.style.fontSize = '1rem';
            inner.innerHTML = '<table><tr><td><a style="color:' + this.colors[this.tab_amount - 1] + '">Douleur ' + this.tab_amount + '<a/></td> \
                    <td><input name="2_dlr' + this.tab_amount + '" autocomplete="off" type="text" style="width:200px;text-align:center" value="' + pain + '"></td></tr>\
                    <tr><td>EVA</td><td><select id="2_eva_fond' + this.tab_amount + '" name="2_eva_fond' + this.tab_amount + '"></select> \
                    (fond douloureux) <input type="button" class="eva_icon no-print" onclick="eva_cvs.setTarget(&quot;2_eva_fond' + this.tab_amount
                + '&quot;);document.getElementById(&quot;eva_win&quot;).style.transform=&quot;scale(1)&quot;;"></td><td><select id="2_eva_pic' + this.tab_amount + '" name="2_eva_pic' + this.tab_amount + '"></select> \
                    (pic douloureux). <input type="button" class="eva_icon no-print" onclick="eva_cvs.setTarget(&quot;2_eva_pic' + this.tab_amount
                + '&quot;);document.getElementById(&quot;eva_win&quot;).style.transform=&quot;scale(1)&quot;;"></td></tr> \
                    <tr><td>Date de début : </td><td><input name="2_date' + this.tab_amount + '" autocomplete="off" type="text" style="text-align:center" value="' + date + '"></td>\
                    <td>Qualité : </td><td><input name="2_qua' + this.tab_amount + '" autocomplete="off" type="text" value="' + quality + '"></td></tr> \
                    <tr><td>Durée : </td><td><input name="2_dur' + this.tab_amount + '" autocomplete="off" type="text" value="' + duration + '"></td> \
                    <td>Fréquence : </td><td><input name="2_fre' + this.tab_amount + '" autocomplete="off" type="text" value="' + frequency + '"></td> </tr>\
                    <tr><td>Circonstances du début : </td><td><input name="2_cir' + this.tab_amount + '" autocomplete="off" type="text" value="' + why + '"></td> \
                    <td>Modifié par : </td><td><input name="2_mod' + this.tab_amount + '" autocomplete="off" type="text" value="' + mod_by + '"></td></tr> \
                    <tr><td>Traitement : </td><td><input name="2_ttt' + this.tab_amount + '" autocomplete="off" type="text" value="' + treatment + '"></td></tr> \
                    <tr><td><input type="button" class="tool no-print" onclick="document.getElementById(&quot;dn4_win&quot;).style.transform=&quot;scale(1)&quot;;pDiagram.setDN4Fields(' + this.tab_amount + ');" value="Questionnaire DN4"></td>\
                    <td><input id="dn4_score_' + this.tab_amount + '" name="2_dn4s' + this.tab_amount + '" value="' + dnf + '" type="text"></td> \
                    <td><div id="dn4q_' + this.tab_amount + '" style="display: none;"></div></td></tr></table>';
            document.getElementById('pain_stack').appendChild(inner);

            var sel = document.getElementById('2_eva_fond' + this.tab_amount);
            var sel2 = document.getElementById('2_eva_pic' + this.tab_amount);

            for (i = 0; i < 10.5; i += 0.5) {
                var op = document.createElement('option');
                op.value = i;
                op.innerHTML = i;
                if (op.value == evaf) op.selected = true;
                sel.appendChild(op);
                var op2 = document.createElement('option');
                op2.value = i;
                op2.innerHTML = i;
                if (op2.value == evap) op2.selected = true;
                sel2.appendChild(op2);
            }
        }

        this.mouseDownDlr = function (e) {
            if (this.current_tool == "A") {
                this.rect = this.canvas.getBoundingClientRect();
                this.clic_pos.x = e.clientX - this.rect.left;
                this.clic_pos.y = e.clientY - this.rect.top;
                this.drag_enabled = true;
            }
        }

        this.mouseUpDlr = function (e) {
            this.rect = this.canvas.getBoundingClientRect();
            this.drag_pos.x = e.clientX - this.rect.left;
            this.drag_pos.y = e.clientY - this.rect.top;
            this.add_symbol(this.drag_pos.x, this.drag_pos.y);
        }

        this.mouseMoveDlr = function (e) {
            if (this.drag_enabled && this.current_tool == "A") {
                this.rect = this.canvas.getBoundingClientRect();
                this.drag_pos.x = e.clientX - this.rect.left;
                this.drag_pos.y = e.clientY - this.rect.top;
                this.redrawDlr();
            }
        }


        this.add_symbol = function (x, y) {
            switch (this.current_tool) {
                case "X":
                    {
                        this.a_Cross.push({ x: x, y: y, color: this.colors[this.current_color] });
                        break;
                    }
                case "O":
                    {
                        this.a_Circle.push({ x: x, y: y, color: this.colors[this.current_color] });
                        break;
                    }
                case "T":
                    {
                        var text = prompt("Entrez le texte : ");
                        if (text != null)
                            this.a_Text.push({
                                x: x, y: y,
                                color: this.colors[this.current_color], text: text
                            });
                        break;
                    }
                case "A":
                    {
                        if (this.drag_enabled) {
                            this.drag_enabled = false;
                            this.a_Arrow.push({
                                x: this.clic_pos.x, y: this.clic_pos.y,
                                x2: x,
                                y2: y,
                                color: this.colors[this.current_color]
                            });
                        }
                        break;
                    }
                default: break;
            }
            this.redrawDlr();
        }

        this.draw_arrow = function (x1, y1, x2, y2) {
            this.context.beginPath();
            this.context.moveTo(x1, y1);
            this.context.lineTo(x2, y2);
            var angle = 120;
            var vector = [x2 - x1, y2 - y1];
            var length = Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1]);
            vector[0] = (vector[0] / length) * 8;
            vector[1] = (vector[1] / length) * 8;

            var r_vector = [vector[0] * Math.cos(angle) - vector[1] * Math.sin(angle),
            vector[0] * Math.sin(angle) + vector[1] * Math.cos(angle)];
            this.context.moveTo(x2, y2);
            this.context.lineTo(x2 - r_vector[0], y2 - r_vector[1]);
            this.context.moveTo(x2, y2);
            r_vector = [vector[0] * Math.cos(-angle) - vector[1] * Math.sin(-angle),
            vector[0] * Math.sin(-angle) + vector[1] * Math.cos(-angle)];
            this.context.lineTo(x2 - r_vector[0], y2 - r_vector[1]);

            this.context.closePath();
            this.context.stroke();
        }

        this.redrawDlr = function () {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

            this.context.drawImage(this.dlrBg, this.canvas.width / 2 - this.dlrBg.width / 2, this.canvas.height / 2 - this.dlrBg.height / 2);

            for (i = 0; i < this.a_Cross.length; ++i) {
                this.context.fillStyle = this.a_Cross[i].color;
                this.context.fillText("X", this.a_Cross[i].x, this.a_Cross[i].y);
            }
            for (i = 0; i < this.a_Circle.length; ++i) {
                this.context.fillStyle = this.a_Circle[i].color;
                this.context.fillText("O", this.a_Circle[i].x, this.a_Circle[i].y);
            }
            for (i = 0; i < this.a_Text.length; ++i) {
                this.context.fillStyle = this.a_Text[i].color;
                this.context.fillText(this.a_Text[i].text, this.a_Text[i].x, this.a_Text[i].y);
            }
            for (i = 0; i < this.a_Arrow.length; ++i) {
                this.context.strokeStyle = this.a_Arrow[i].color;
                this.draw_arrow(this.a_Arrow[i].x, this.a_Arrow[i].y, this.a_Arrow[i].x2, this.a_Arrow[i].y2);
            }
            if (this.drag_enabled) {
                this.context.strokeStyle = this.colors[this.current_color];
                this.draw_arrow(this.clic_pos.x, this.clic_pos.y, this.drag_pos.x, this.drag_pos.y);
            }
        }

        this.clear_dlr = function () {
            this.a_Arrow.length = 0;
            this.a_Circle.length = 0;
            this.a_Cross.length = 0;
            this.a_Text.length = 0;

            this.redrawDlr();
        }

        this.openDN4 = function (v) {
            openedDN4 = v;
            var w = window.open('dn4.html');
            w.opener = window;
        }

        this.HandlePopupResult = function (result, s_bitfield) {
            DN4s.push(s_bitfield);
            document.getElementById('dn4_score_' + openedDN4 + '').value = result;
        }

        this.setDN4Fields = function (current) {
            this.DN4Current = current;
            for (i = 1; i < 11; ++i) {
                if ((this.DN4_bitfields[this.DN4Current - 1]) & (1 << i))
                    document.getElementsByName("q_dn4_" + i)[0].checked = true;
                else document.getElementsByName("q_dn4_" + i)[1].checked = true;
            }
        }
        this.compute_dn4 = function () {
            var score = 0;
            var bitfield = 0;
            for (i = 1; i < 11; i++) {
                var q = 'q_dn4_' + (i).toString();
                var elements = document.getElementsByName(q);
                if (elements[0].checked) {
                    bitfield |= (1 << i);
                    score++;
                }
            }

            if (this.DN4Current <= this.DN4_bitfields.length)
                this.DN4_bitfields[this.DN4Current - 1] = bitfield;
            else this.DN4_bitfields.push(bitfield);

            if (document.getElementById('dn4_score_' + (this.DN4Current)))
                document.getElementById('dn4_score_' + (this.DN4Current)).value = score;
            document.getElementById('dn4_inner_score').value = score;
            //document.getElementById('dn4_win').style.transform = 'scale(0)';
        }
    }

    var tDiag = new TeethDiagram();
    tDiag.initialise();

    function Teeth(id, posx, posy) {
        this.m_Exists = true;
        this.m_Id = id;

        this.m_Implant = false;
        this.m_Crown = false;
        this.m_Endo = false;
        this.m_FillL = false;
        this.m_FillR = false;
        this.m_FillO = false;

        this.m_Occlusion = new Array();
        this.m_ImgFront = new Image();
        this.m_ImgTop = new Image();
        this.m_ImgCrownTop = new Image();
        this.m_ImgCrownFront = new Image();

        this.m_ImgImpl = new Image();
        this.m_ImgEndo = new Image();
        this.m_ImgFillO = new Image();
        this.m_ImgFillL = new Image();
        this.m_ImgFillR = new Image();
        this.m_DecayMask = new Image(102, 239);
        this.m_Rect = { x: posx, y: posy, w: 102, h: 478 };
        this.m_FrontRect;
        this.m_TopRect;

        if (this.m_Id > 30) {
            this.m_FrontRect = { x: posx, y: posy + 239, w: 102, h: 239 };
            this.m_TopRect = { x: posx, y: posy, w: 102, h: 239 };
        }
        else {
            this.m_FrontRect = { x: posx, y: posy, w: 102, h: 239 };
            this.m_TopRect = { x: posx, y: posy + 239, w: 102, h: 239 };
        }

        this.m_OcclPoints = new Array();

        this.draw = function () {
            tDiag.m_Context.clearRect(this.m_Rect.x, this.m_Rect.y, this.m_Rect.w, this.m_Rect.h);
            if (this.m_Exists) {
                tDiag.m_Context.drawImage(this.m_ImgFront, this.m_FrontRect.x, this.m_FrontRect.y);
                tDiag.m_Context.drawImage(this.m_ImgTop, this.m_TopRect.x, this.m_TopRect.y);
                if (this.m_Implant)
                    tDiag.m_Context.drawImage(tDiag.m_Teeth[0].m_ImgImpl, this.m_FrontRect.x, this.m_FrontRect.y);
                else if (this.m_Endo)
                    tDiag.m_Context.drawImage(this.m_ImgEndo, this.m_FrontRect.x, this.m_FrontRect.y);

                /* FILLINGS */

                if (this.m_Crown) {
                    tDiag.m_Context.drawImage(this.m_ImgCrownTop, this.m_TopRect.x, this.m_TopRect.y);
                    tDiag.m_Context.drawImage(this.m_ImgCrownFront, this.m_FrontRect.x, this.m_FrontRect.y);
                }
                else {
                    if (this.m_FillR) {
                        if (this.m_Id % 10 < 3) tDiag.m_Context.drawImage(this.m_ImgFillR, this.m_FrontRect.x, this.m_FrontRect.y);
                        else tDiag.m_Context.drawImage(this.m_ImgFillR, this.m_TopRect.x, this.m_TopRect.y);
                    }
                    if (this.m_FillL) {
                        if (this.m_Id % 10 < 3) tDiag.m_Context.drawImage(this.m_ImgFillL, this.m_FrontRect.x, this.m_FrontRect.y);
                        else tDiag.m_Context.drawImage(this.m_ImgFillL, this.m_TopRect.x, this.m_TopRect.y);
                    }
                    if (this.m_FillO) {
                        tDiag.m_Context.drawImage(this.m_ImgFillO, this.m_TopRect.x, this.m_TopRect.y);
                    }
                }

                for (i = 0; i < this.m_OcclPoints.length; ++i) {
                    tDiag.m_Context.beginPath();
                    tDiag.m_Context.arc(this.m_OcclPoints[i].x, this.m_OcclPoints[i].y, this.m_OcclPoints[i].size, 0, 2 * Math.PI, false);
                    tDiag.m_Context.fillStyle = tDiag.CfColors[this.m_OcclPoints[i].color];
                    tDiag.m_Context.fill();
                    tDiag.m_Context.lineWidth = 1;
                    tDiag.m_Context.strokeStyle = '#003300';
                    tDiag.m_Context.stroke();
                    tDiag.m_Context.closePath();
                }
            }
        }
        this.contains = function (x, y) {
            if (x < this.m_Rect.x + this.m_Rect.w && x > this.m_Rect.x
                && y > this.m_Rect.y && y < this.m_Rect.y + this.m_Rect.h) {
                return true;
            }
            else return false;
        }
        this.addOcclusionPoint = function (posx, posy, pcolor, psize = 10) {
            this.m_OcclPoints.push({ x: posx, y: posy, color: pcolor, size: psize });
        }
        this.printStatus = function () {
            alert('Numéro : ' + this.m_Id +
                '\nExtraite : ' + this.m_Exists +
                '\nImplant : ' + this.m_Implant +
                '\nPoints d\'occlusion : ' + this.m_OcclPoints.length);
        }
        this.toggleImplant = function () {
            this.m_Implant = !this.m_Implant;
        }
        this.toggleCrown = function () {
            this.m_Crown = !this.m_Crown;
        }
        this.toggleEndo = function () {
            this.m_Endo = !this.m_Endo;
        }
        this.togglePresence = function () {
            this.m_Exists = !this.m_Exists;
            for (var i = 0; i < tDiag.m_Teeth.length; ++i) {
                if (tDiag.m_Teeth[i].m_Id == this.m_Id) {
                    tDiag.m_Teeth[i].m_Exists = this.m_Exists;
                    tDiag.m_Teeth[i].draw();
                }

            }
        }
        this.setFilling = function (x) {
            x -= this.m_Rect.x;
            if (this.m_Id % 10 > 2) {
                if (x < this.m_Rect.w / 3)
                    this.m_FillL = !this.m_FillL;
                else if (x < this.m_Rect.w * 0.66)
                    this.m_FillO = !this.m_FillO;
                else
                    this.m_FillR = !this.m_FillR;
            }
            else {
                if (x < this.m_Rect.w / 2)
                    this.m_FillL = !this.m_FillL;
                else
                    this.m_FillR = !this.m_FillR;
            }
        }
    }

    function TeethDiagram() {
        this.CfColors = ['blue', 'red'];
        this.ToolList = {
            Occl: 0,
            Impl: 1,
            Crwn: 2,
            Endo: 3,
            Abs: 4,
            Fill: 5
        };
        this.ToolBox = [{ v: this.ToolList.Occl, name: 'dd_occl', opt: 'occl_tool_opt' },
        { v: this.ToolList.Impl, name: 'dd_impl', opt: '' },
        { v: this.ToolList.Crwn, name: 'dd_crwn', opt: '' },
        { v: this.ToolList.Endo, name: 'dd_endo', opt: '' },
        { v: this.ToolList.Abs, name: 'dd_abs', opt: '' },
        { v: this.ToolList.Fill, name: 'dd_fill', opt: '' }];

        this.m_Canvas = document.getElementById('DentalDiagram');
        this.m_Context = this.m_Canvas.getContext('2d');
        this.m_CellWidth;
        this.m_CellHeight;
        this.m_MousePress = { x: 0, y: 0 };
        this.m_Dragging = false;
        this.m_OcclSize = 6; // actually half the size

        this.m_Teeth = new Array(32);

        this.m_LeftToLoad = 64;
        this.m_OcclColor = 0;
        this.m_CurrentTool = 0;
        this.m_Fullscreen = false;
        this.m_EraserMode = false;

        this.checkLoadState = function () {
            --this.m_LeftToLoad;
            if (this.m_LeftToLoad == 0) {
                this.drawBackground();
                var img = document.getElementById('rasterisedDiag');
                img.src = this.m_Canvas.toDataURL();
                this.m_Rect = this.m_Canvas.getBoundingClientRect();
            }
        }

        this.rasterize = function () {
            var img = document.getElementById('rasterisedDiag');
            img.src = this.m_Canvas.toDataURL();
        }

        this.initialise = function () {
            this.m_Canvas.width = 1632;
            this.m_Canvas.height = 956;
            this.m_Rect;

            this.m_CellWidth = this.m_Canvas.width / 16;
            this.m_CellHeight = this.m_Canvas.height / 4;

            for (var i = 11; i < 19; i++) {
                this.m_Teeth[i - 11] = new Teeth(i, this.m_CellWidth * - (i - 18), 0);

                this.m_Teeth[i - 11].m_ImgFront.src = "assets/images/bbd/" + i + ".png";
                this.m_Teeth[i - 11].m_ImgTop.src = "assets/images/bbd/" + i + "_u.png";
                this.m_Teeth[i - 11].m_ImgCrownFront.src = "assets/images/bbd/crown/" + i + "_crown.png";
                this.m_Teeth[i - 11].m_ImgCrownTop.src = "assets/images/bbd/crown/" + i + "_crown_u.png";

                this.m_Teeth[i - 11].m_ImgImpl.src = "assets/images/bbd/implants/" + i + "_impl.png";
                this.m_Teeth[i - 11].m_ImgEndo.src = "assets/images/bbd/endo/" + i + "_endo.png";
                this.m_Teeth[i - 11].m_ImgFillL.src = "assets/images/bbd/fillings/" + i + "_fillL.png";
                this.m_Teeth[i - 11].m_ImgFillR.src = "assets/images/bbd/fillings/" + i + "_fillR.png";
                if (i % 10 > 2)
                    this.m_Teeth[i - 11].m_ImgFillO.src = "assets/images/bbd/fillings/" + i + "_fillO.png";

                this.m_Teeth[i - 11].m_ImgFront.onload = this.checkLoadState.bind(this);
                this.m_Teeth[i - 11].m_ImgTop.onload = this.checkLoadState.bind(this);
            }
            for (var i = 21; i < 29; i++) {
                this.m_Teeth[i - 13] = new Teeth(i, this.m_CellWidth * (i - 13), 0);

                this.m_Teeth[i - 13].m_ImgFront.src = "assets/images/bbd/" + i + ".png";
                this.m_Teeth[i - 13].m_ImgTop.src = "assets/images/bbd/" + i + "_u.png";
                this.m_Teeth[i - 13].m_ImgCrownFront.src = "assets/images/bbd/crown/" + i + "_crown.png";
                this.m_Teeth[i - 13].m_ImgCrownTop.src = "assets/images/bbd/crown/" + i + "_crown_u.png";

                this.m_Teeth[i - 13].m_ImgEndo.src = "assets/images/bbd/endo/" + i + "_endo.png";
                this.m_Teeth[i - 13].m_ImgFillL.src = "assets/images/bbd/fillings/" + i + "_fillL.png";
                this.m_Teeth[i - 13].m_ImgFillR.src = "assets/images/bbd/fillings/" + i + "_fillR.png";
                if (i % 10 > 2)
                    this.m_Teeth[i - 13].m_ImgFillO.src = "assets/images/bbd/fillings/" + i + "_fillO.png";

                this.m_Teeth[i - 13].m_ImgFront.onload = this.checkLoadState.bind(this);
                this.m_Teeth[i - 13].m_ImgTop.onload = this.checkLoadState.bind(this);
            }
            for (var i = 31; i < 39; i++) {
                this.m_Teeth[i - 15] = new Teeth(i, this.m_CellWidth * (i - 23), 478);

                this.m_Teeth[i - 15].m_ImgFront.src = "assets/images/bbd/" + i + ".png";
                this.m_Teeth[i - 15].m_ImgTop.src = "assets/images/bbd/" + i + "_u.png";
                this.m_Teeth[i - 15].m_ImgCrownFront.src = "assets/images/bbd/crown/" + i + "_crown.png";
                this.m_Teeth[i - 15].m_ImgCrownTop.src = "assets/images/bbd/crown/" + i + "_crown_u.png";

                this.m_Teeth[i - 15].m_ImgEndo.src = "assets/images/bbd/endo/" + i + "_endo.png";
                this.m_Teeth[i - 15].m_ImgFillL.src = "assets/images/bbd/fillings/" + i + "_fillL.png";
                this.m_Teeth[i - 15].m_ImgFillR.src = "assets/images/bbd/fillings/" + i + "_fillR.png";
                if (i % 10 > 2)
                    this.m_Teeth[i - 15].m_ImgFillO.src = "assets/images/bbd/fillings/" + i + "_fillO.png";

                this.m_Teeth[i - 15].m_ImgFront.onload = this.checkLoadState.bind(this);
                this.m_Teeth[i - 15].m_ImgTop.onload = this.checkLoadState.bind(this);
            }
            for (var i = 41; i < 49; i++) {
                this.m_Teeth[i - 17] = new Teeth(i, this.m_CellWidth * -(i - 48), 478);

                this.m_Teeth[i - 17].m_ImgFront.src = "assets/images/bbd/" + i + ".png";
                this.m_Teeth[i - 17].m_ImgTop.src = "assets/images/bbd/" + i + "_u.png";
                this.m_Teeth[i - 17].m_ImgCrownFront.src = "assets/images/bbd/crown/" + i + "_crown.png";
                this.m_Teeth[i - 17].m_ImgCrownTop.src = "assets/images/bbd/crown/" + i + "_crown_u.png";

                this.m_Teeth[i - 17].m_ImgEndo.src = "assets/images/bbd/endo/" + i + "_endo.png";
                this.m_Teeth[i - 17].m_ImgFillL.src = "assets/images/bbd/fillings/" + i + "_fillL.png";
                this.m_Teeth[i - 17].m_ImgFillR.src = "assets/images/bbd/fillings/" + i + "_fillR.png";
                if (i % 10 > 2)
                    this.m_Teeth[i - 17].m_ImgFillO.src = "assets/images/bbd/fillings/" + i + "_fillO.png";

                this.m_Teeth[i - 17].m_ImgFront.onload = this.checkLoadState.bind(this);
                this.m_Teeth[i - 17].m_ImgTop.onload = this.checkLoadState.bind(this);
            }

            this.m_Canvas.addEventListener('mouseup', this.mouseRelease.bind(this), false);
            this.m_Canvas.addEventListener('mousedown', this.mousePress.bind(this), false);
            this.m_Canvas.addEventListener('mousemove', this.mouseMove.bind(this), false);

            document.getElementById('ddFS').addEventListener('click', this.useFullScreen, false);

            this.m_Canvas.oncontextmenu = function (e) {
                e.preventDefault();
            }

            document.getElementById('dd_impl').addEventListener('click', this.setTool.bind(this, 'dd_impl'), false);
            document.getElementById('dd_occl').addEventListener('click', this.setTool.bind(this, 'dd_occl'), false);
            document.getElementById('dd_crwn').addEventListener('click', this.setTool.bind(this, 'dd_crwn'), false);
            document.getElementById('dd_endo').addEventListener('click', this.setTool.bind(this, 'dd_endo'), false);
            document.getElementById('dd_abs').addEventListener('click', this.setTool.bind(this, 'dd_abs'), false);
            document.getElementById('dd_fill').addEventListener('click', this.setTool.bind(this, 'dd_fill'), false);

            document.getElementById('dd_slctclrb').addEventListener('click', this.setOcclColor.bind(this, 0), false);
            document.getElementById('dd_slctclrr').addEventListener('click', this.setOcclColor.bind(this, 1), false);
            document.getElementById('dd_eraser').addEventListener('click', this.setOcclEraser.bind(this), false);

            document.getElementById('root_tools').addEventListener('click', this.toggleToolListVisibility.bind(this, 'root_tools_box'), false);
            document.getElementById('proth_tools').addEventListener('click', this.toggleToolListVisibility.bind(this, 'proth_tools_box'), false);
            document.getElementById('oce_tools').addEventListener('click', this.toggleToolListVisibility.bind(this, 'oce_tools_box'), false);
        }

        this.setTool = function (name, e) {
            document.getElementById(name).className = 'li_button li_button_checked';
            var k = this.m_CurrentTool;
            for (var i = 0; i < this.ToolBox.length; ++i) {
                if (k == this.ToolBox[i].v) {
                    document.getElementById(this.ToolBox[i].name).className = 'li_button';
                }
                if (this.ToolBox[i].name == name) {
                    for (var c = 0; c < 6; ++c) {
                        if (this.ToolBox[c].v == k) {
                            var oldopt = document.getElementById(this.ToolBox[c].opt);
                            if (oldopt)
                                oldopt.style.display = 'none';
                            break;
                        }
                    }
                    var newopt = document.getElementById(this.ToolBox[i].opt);
                    if (newopt)
                        newopt.style.display = 'flex';
                    this.m_CurrentTool = this.ToolBox[i].v;
                }
            }
        }

        this.toggleToolListVisibility = function (target, e) {
            var t = document.getElementById(target);
            if (t.style.maxHeight == '500px') {
                t.style.maxHeight = '0px';
                t.style.visibility = 'hidden';
            }
            else {
                t.style.maxHeight = '500px';
                t.style.visibility = 'visible';
            }
        }

        this.setOcclColor = function (color, e) {
            this.m_OcclColor = color;
            this.m_EraserMode = false;
        }

        this.setOcclEraser = function (e) {
            this.m_EraserMode = true;
        }

        this.drawBackground = function () {
            this.m_Context.fillStyle = "#353535";
            this.m_Context.clearRect(0, 0, this.m_Canvas.width, this.m_Canvas.height);

            for (var i = 0; i < this.m_Teeth.length; ++i) {
                this.m_Teeth[i].draw();
            }
        }

        this.getTeethAt = function (x, y) {
            for (var i = 0; i < 32; ++i) {
                if (this.m_Teeth[i].contains(x, y)) {
                    return this.m_Teeth[i];
                }
            }
        }

        this.mousePress = function (e) {
            var scale = this.m_Canvas.clientHeight / this.m_Canvas.height;
            this.m_MousePress = { x: (e.offsetX / scale), y: (e.offsetY / scale) };

            if (this.m_EraserMode == false) this.m_Dragging = true;
            this.m_OcclSize = 6;

            if (e.which == 1 && this.m_Dragging) {
                switch (this.m_CurrentTool) {
                    case this.ToolList.Occl:
                        {
                            tDiag.m_Context.beginPath();
                            tDiag.m_Context.arc(this.m_MousePress.x, this.m_MousePress.y, 6, 0, 2 * Math.PI, false);
                            tDiag.m_Context.fillStyle = tDiag.CfColors[this.m_OcclColor];
                            tDiag.m_Context.fill();
                            tDiag.m_Context.lineWidth = 1;
                            tDiag.m_Context.strokeStyle = '#003300';
                            tDiag.m_Context.stroke();
                            tDiag.m_Context.closePath();
                            break;
                        }
                    default: break;
                }
            }
        }

        this.mouseMove = function (e) {
            if (this.m_Dragging) {
                var scale = this.m_Canvas.clientHeight / this.m_Canvas.height;
                var clickp = { x: (e.offsetX / scale), y: (e.offsetY / scale) };

                switch (this.m_CurrentTool) {
                    case this.ToolList.Occl:
                        {
                            var dst = Math.sqrt((clickp.x - this.m_MousePress.x) * (clickp.x - this.m_MousePress.x) +
                                (clickp.y - this.m_MousePress.y) * (clickp.y - this.m_MousePress.y));
                            if (dst < 20) {
                                this.m_OcclSize = 6;
                            }
                            else if (dst < 40) {
                                this.m_OcclSize = 9;
                            }
                            else {
                                this.m_OcclSize = 12;
                            }

                            this.getTeethAt(this.m_MousePress.x, this.m_MousePress.y).draw();
                            tDiag.m_Context.beginPath();
                            tDiag.m_Context.arc(this.m_MousePress.x, this.m_MousePress.y, this.m_OcclSize, 0, 2 * Math.PI, false);
                            tDiag.m_Context.fillStyle = tDiag.CfColors[this.m_OcclColor];
                            tDiag.m_Context.fill();
                            tDiag.m_Context.lineWidth = 1;
                            tDiag.m_Context.strokeStyle = '#003300';
                            tDiag.m_Context.stroke();
                            tDiag.m_Context.closePath();
                            break;
                        }
                    default: break;
                }
            }
        }

        this.mouseRelease = function (e) {
            var scale = this.m_Canvas.clientHeight / this.m_Canvas.height;
            var clickp = { x: (e.offsetX / scale), y: (e.offsetY / scale) };
            this.m_Dragging = false;

            if (e.which == 1) // mouse button
            {
                switch (this.m_CurrentTool) {
                    case this.ToolList.Occl:
                        {
                            if (this.m_EraserMode) {
                                var teeth = this.getTeethAt(this.m_MousePress.x, this.m_MousePress.y);
                                for (var i = 0; i < teeth.m_OcclPoints.length; ++i) {
                                    var dst = Math.sqrt((teeth.m_OcclPoints[i].x - clickp.x) * (teeth.m_OcclPoints[i].x - clickp.x) +
                                        (teeth.m_OcclPoints[i].y - clickp.y) * (teeth.m_OcclPoints[i].y - clickp.y));
                                    if (dst < teeth.m_OcclPoints[i].size) {
                                        teeth.m_OcclPoints.splice(i, 1);
                                        this.getTeethAt(clickp.x, clickp.y).draw();
                                    }
                                }
                            }
                            else {
                                this.getTeethAt(this.m_MousePress.x, this.m_MousePress.y).addOcclusionPoint(this.m_MousePress.x, this.m_MousePress.y, this.m_OcclColor, this.m_OcclSize);
                                this.getTeethAt(this.m_MousePress.x, this.m_MousePress.y).draw();
                            }
                            break;
                        }
                    case this.ToolList.Impl:
                        {
                            this.getTeethAt(clickp.x, clickp.y).toggleImplant();
                            this.getTeethAt(clickp.x, clickp.y).draw();
                            break;
                        }
                    case this.ToolList.Crwn:
                        {
                            this.getTeethAt(clickp.x, clickp.y).toggleCrown();
                            this.getTeethAt(clickp.x, clickp.y).draw();
                            break;
                        }
                    case this.ToolList.Abs:
                        {
                            this.getTeethAt(clickp.x, clickp.y).togglePresence();
                            this.getTeethAt(clickp.x, clickp.y).draw();
                            break;
                        }
                    case this.ToolList.Endo:
                        {
                            this.getTeethAt(clickp.x, clickp.y).toggleEndo();
                            this.getTeethAt(clickp.x, clickp.y).draw();
                            break;
                        }
                    case this.ToolList.Fill:
                        {
                            this.getTeethAt(clickp.x, clickp.y).setFilling(clickp.x);
                            this.getTeethAt(clickp.x, clickp.y).draw();
                            break;
                        }
                    default: break;
                }

            }
            else if (e.which == 3) {
                this.getTeethAt(clickp.x, clickp.y).printStatus();
            }
        }

        this.useFullScreen = function () {
            if (!this.m_Fullscreen) {
                if (document.fullscreenEnabled ||
                    document.webkitFullscreenEnabled ||
                    document.mozFullScreenEnabled ||
                    document.msFullscreenEnabled) {
                    this.m_Fullscreen = true;
                    var i = document.getElementById("ddFSDIV");

                    if (i.requestFullscreen) {
                        i.requestFullscreen();
                    } else if (i.webkitRequestFullscreen) {
                        i.webkitRequestFullscreen();
                    } else if (i.mozRequestFullScreen) {
                        i.mozRequestFullScreen();
                    } else if (i.msRequestFullscreen) {
                        i.msRequestFullscreen();
                    }
                }
            }
            else {
                this.m_Fullscreen = false;
                if (document.cancelFullScreen) {
                    document.cancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
        }
    }
})
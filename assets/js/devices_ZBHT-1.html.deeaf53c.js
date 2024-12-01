"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[55074],{45090:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>l,data:()=>o});var a=i(6254);const n={},l=(0,i(39583).A)(n,[["render",function(e,t){const i=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[8]||(t[8]=(0,a.Lk)("h1",{id:"smartenit-zbht-1",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#smartenit-zbht-1"},[(0,a.Lk)("span",null,"Smartenit ZBHT-1")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"ZBHT-1")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(i,{to:"/supported-devices/#v=Smartenit"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Smartenit")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Temperature & humidity sensor")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"battery, temperature, humidity, linkquality")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZBHT-1.png",alt:"Smartenit ZBHT-1"})])],-1))])]),t[9]||(t[9]=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="similar-devices" tabindex="-1"><a class="header-anchor" href="#similar-devices"><span>Similar Devices</span></a></h3><p>This device is older and seems to be similar to the netvox Z711 (and others).</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><h4 id="resetting-the-device-restore-to-factory-defaults" tabindex="-1"><a class="header-anchor" href="#resetting-the-device-restore-to-factory-defaults"><span>Resetting the Device/Restore to Factory Defaults</span></a></h4><ol><li>Remove the battery to power off the device.</li><li>Press and hold the only button.</li><li>Re-install the batteries to power on the device</li><li>Release the button.</li></ol><ul><li>The LED will blink quickly, and the reset/restore is complete</li></ul><h4 id="joining-the-network" tabindex="-1"><a class="header-anchor" href="#joining-the-network"><span>Joining the Network</span></a></h4><ol><li>Remove battery from device</li><li>Enable permit-join on Zigbee2MQTT</li><li>Re-install battery in the device</li></ol><ul><li>The LED will flash 5 times to indicate success (no flashing means not successful)</li></ul><ol start="4"><li>After successfully joining, press and hold the only button for 3 seconds to broadcast the binding request.</li><li>The LED will flash once.</li><li>The LED flashes 5 times after the binding is completed; otherwise, it flashes 10 times.</li></ol><h4 id="waking-the-device" tabindex="-1"><a class="header-anchor" href="#waking-the-device"><span>Waking the Device</span></a></h4><p>If the device is asleep (which is most of the time) and you need it to be awake for some reason, tap the only button on the device. The LED will flash 5 times and the device will be awake for a brief period.</p><h3 id="status-of-functions" tabindex="-1"><a class="header-anchor" href="#status-of-functions"><span>Status of Functions</span></a></h3><ol><li>Temperature monitoring - Works</li><li>Humidity monitoring - Works</li><li>Battery monitoring - untested.</li></ol><ul><li>In theory the device LED will flash ONCE if the voltage falls below 2.4V</li><li>In theory the device will send a low-power report to the ZigBee network if the voltage falls below 2.4V - no other battery reporting.</li></ul><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',17)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,a.Fv)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10))])}]]),o=JSON.parse('{"path":"/devices/ZBHT-1.html","title":"Smartenit ZBHT-1 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Smartenit ZBHT-1 control via MQTT","description":"Integrate your Smartenit ZBHT-1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-05-11T17:09:57.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Similar Devices","slug":"similar-devices","link":"#similar-devices","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Status of Functions","slug":"status-of-functions","link":"#status-of-functions","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1733059812000},"filePathRelative":"devices/ZBHT-1.md"}')}}]);
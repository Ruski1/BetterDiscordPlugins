//META{"name":"ColourBox","displayName":"ColourBox", "source":"https://github.com/l0c4lh057/BetterDiscordStuff/blob/master/Plugins/Minespoiler/Minespoiler.plugin.js"}*//

class ColourBox{
    // Constructor
    constructor() {
        this.initialized = false;
    }

    // Meta
    getName() { return "ColourBox"; }
    getDescription() { return "A colourpicker box for discord"; }
    getVersion() { return "0.1.0"; }
    getAuthor() { return "Ruski"; }

    // Settings  Panel
    getSettingsPanel() {
        let panel = $(`<form class="form" style="width:100%;"></form>`)[0];
		new ZLibrary.Settings.SettingGroup(this.getName(), {shown:true}).appendTo(panel)
		.append(
			new ZLibrary.Settings.Switch("Clyde mode", "If you enable this option games will be sent as a Clyde message. Only you will see them, nobody else.", this.settings.sendAsClyde, (e)=>{
				this.settings.sendAsClyde = e;
				this.saveSettings();
			})
		);
		return panel;
	}
    
    // Load/Unload
    load() {
        if (window.ZLibrary) {
            ZLibrary.PluginUpdater.checkForUpdate(
            this.getName(),
            this.getVersion(),
            "https://raw.githubusercontent.com/Egrodo/DiscordPlugins/master/GameActivityToggle.plugin.js"
            );
        }
    }

    unload() {

    }

    // Events

    observer(e) {
    };
    
    // Start/Stop
    start() {
        var libraryScript = document.getElementById('zeresLibraryScript');
		BdApi.showToast(this.getName() + " " + this.getVersion() + " has started.");
	if (!libraryScript) {
		libraryScript = document.createElement("script");
		libraryScript.setAttribute("type", "text/javascript");
		libraryScript.setAttribute("src", "https://rauenzi.github.io/BetterDiscordAddons/Plugins/PluginLibrary.js");
		libraryScript.setAttribute("id", "zeresLibraryScript");
		document.head.appendChild(libraryScript);
	}

	if (typeof window.ZeresLibrary !== "undefined") this.initialize();
	else libraryScript.addEventListener("load", () => { this.initialize(); });
    }
       
    stop() {
        BdApi.showToast(this.getName() + " " + this.getVersion() + " has stopped.");
    };
}
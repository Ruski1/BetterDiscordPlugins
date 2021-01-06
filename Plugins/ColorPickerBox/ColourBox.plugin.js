/**
 * @name ColourBox
 * @displayName ColourBox
 * @source https://github.com/Ruski1/BetterDiscordPlugins/edit/main/Plugins/ColorPickerBox/ColourBox.plugin.js
 * @authorId 399313915311292416
 */


class ColourBox{
    // Constructor
    constructor() {
        this.initialized = false;
    }

    // Meta
    getName() { return "ColourBox"; }
    getDescription() { return "A colourpicker box for discord"; }
    getVersion() { return "0.1.1"; }
    getAuthor() { return "Ruski"; }

    // Settings  Panel
    getSettingsPanel() {
		
	}
    
    // Load/Unload
    load() {
        if (window.ZLibrary) {
            ZLibrary.PluginUpdater.checkForUpdate(
            this.getName(),
            this.getVersion(),
            "https://raw.githubusercontent.com/Ruski1/BetterDiscordPlugins/main/Plugins/ColorPickerBox/ColourBox.plugin.js"
            );
        }
    }

    unload() {

    }

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
	this.createButton()
    }
       
    stop() {
        BdApi.showToast(this.getName() + " " + this.getVersion() + " has stopped.");
    };
}

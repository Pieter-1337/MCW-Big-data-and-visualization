// Read embed application token from textbox
var txtAccessToken = $('#txtEmbedToken').val();

// Read embed URL from textbox
var txtEmbedUrl = "https://app.powerbi.com/embed?dashboardId=b5f50796-6e97-4dc5-a755-00cf4405e029&tileId=e9c81853-3263-4f30-af4b-63fad7d79627&groupId=be8908da-da25-452e-b220-163f52476cdd&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3d%3d";

// Read dashboard Id from textbox
var tileContainerId = "b5f50796-6e97-4dc5-a755-00cf4405e029";

// Read tile Id from textbox
var txtEmbedTileId = "e9c81853-3263-4f30-af4b-63fad7d79627";

function RefreshPowerBi() {

FillPowerBiTile(tileContainerId, txtEmbedTileId, "tileContainer-small");
FillPowerBiTile(tileContainerId, txtEmbedTileId, "tileContainer-large");

}

var refresh = document.getElementById('refreshId');
refresh.click(() => RefreshPowerBi());

function FillPowerBiTile(embedDashbordId, EmbedTileId, tileContainerId) {
    // Read embed type from radio
    var tokenType = $('input:radio[name=tokenType]:checked').val();

    // Get models. models contains enums that can be used.
    var models = window['powerbi-client'].models;

    // Embed configuration used to describe the what and how to embed.
    // This object is used when calling powerbi.embed.
    // You can find more information at https://github.com/Microsoft/PowerBI-JavaScript/wiki/Embed-Configuration-Details.
    var config = {
        type: 'tile',
        tokenType: tokenType === '0' ? models.TokenType.Aad : models.TokenType.Embed,
        accessToken: txtAccessToken,
        embedUrl: txtEmbedUrl,
        id: EmbedTileId,
        dashboardId: embedDashbordId,
        settings:
        {
            layoutType: models.LayoutType.Custom,

            custom:
            {
                pageSize:
                {
                    type: models.PageSizeType.Standard,
                    width: 300,
                    height: 300
                }
            }

        }
    };

    // Get a reference to the embedded tile HTML element
    var tileContainer = $('#' + tileContainerId)[0];

    // Embed the tile and display it within the div container.
    var tile = powerbi.embed(tileContainer, config);

    // Tile.off removes a given event handler if it exists.
    tile.off("tileLoaded");

    // Tile.on will add an event handler which prints to Log window.
    tile.on("tileLoaded", function (event) {
        Log.logText("Tile loaded event");
    });

    // Tile.off removes a given event handler if it exists.
    tile.off("tileClicked");

    // Tile.on will add an event handler which prints to Log window.
    tile.on("tileClicked", function (event) {
        Log.logText("Tile clicked event");
        Log.log(event.detail);
    });

}
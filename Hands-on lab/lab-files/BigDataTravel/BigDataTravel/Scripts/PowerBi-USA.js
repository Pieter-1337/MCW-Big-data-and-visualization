// Read embed application token from textbox
var txtAccessToken = "H4sIAAAAAAAEAB2WxQ701hKE3-XfOpKZImVh5jHjzswMYzu6735H2deiT52qr_vfP1b6DHNa_Pn7D6lJxtHY0vIe9NnlQoMXZOLF4VADEfEiJtJTN3nla3ESU6z2lIwGsb0j5ZCgHcfbNWtC3EG4dzM9_fORWmVYXEBXQ0STmktT9NwaTyYdkmydMcrudkVmHw0KWIq_lFBDSF96mxucRcnMDxsQ9aIcMAQ3X12tp-jmP8PwxW3maSNfjx-BySHarIeMHd3UL3Gh1iQ3wdGr6SbQ06Skxet0JbwnofQgpYFoUMfdUNyY-hDZ1C3re1hJFzsuheB1C9dnIZCsQE8pVqWos5suta0xkE9MeRRt0YzmQ782y5MLBW5B6hw6N_7U3UV0pBcR6UTFmy3alM7DMXvPNJSWsW-uVVLoAR0jBqvUToP6V8DiyuvRaoPAb0re0LMky6NTuBRIW8UJXirYs4SsT0gJiYfD-ic1obvxKd4w25Yv3v5wmWP2z-AOYe1dRChPcEyhw4NuFuerBhYp6Uj1ql55X7z6UZvCQgqCS-iLIXhpprEEZAcqy1p3UCgLFjEhM9g8bSVpsiaADaCBdILeMmVoOUcoK7YP18B3R-hUDAzXIE43WJwpJ2an0HxupidEm3gZPvzgqAKjBv46uJJDYI21qauTrE-x5il2C6ylmJxkFmo-ibrZaKrFldx5R3mgQOqJ3xYlEb45Gzrpe0PmotXWq2TrXaZViw0Cl9QjNunzANThsCklTO19q30bG3ZX6DCBCSZ4uviULG1m-_EJqOfoMhP7vFJmEb1CmL0IrZ2JK6Dvm_h-4tvuLcF-8eQnvSN9DbQ1NnTOcjq3G19hxgzKGGevXAYEQ6xmSNxLA3qxUDFBn643X39f3bEkM-2Ua0qzBagrKjPfKAuBzkBGcufmy0zzELAkqWUvYbewUVyhGO3xhxFNglLLgNi9IysTvfrux8mjZ-jbyIr7MFNzS5OLFrCCkBBMkgOGxLjLwqa6LaJ3JeeaVS4brbArnOcpq9DzS0Ye1wIoFPC5ITeAbZ3I9NQDma7eBHtMwApDWqA2YorxiKv5lg88JbHwAteIs46-fHkA2Or5qzf7y-xVaUi4QSR-29NX3Y7KiuilQ5v6xEDeS_1YcHRPnPm2FtlCRrbjYMheShbs1L9qmx1y4P4SfGB6BeGXX1m2_Y1ov1D5udh9m2ypqmujNE8sjBTiR9Gg_PU-AL0na7t_40nNDqT8dakxQsaVUYerDQC56CgTAhI8A9LKGsUlONH_RIxvC3wU2WdXmng62NL1G-5rNnOyBNl1y4he14h3hKnkdkvHIgkXJDNSCbgv4lX6srxqZaM0ePuun34ZeDK5CMs1dyH-pfA8ZFnLwyMZ1Tb_gynB1vAK4jMAj75vwH0gOgdz4lIV_CQMom7Tk4tXZY5e0vfvVg_Y4OSeo39OlXCNuQmkHGE01VZy1dkBqJEgBArMeFNRbx9UkIX3YIz5le8_KC6HJH4UdKnsh5w4Hrfsg8MD5AH6FyJgGAg2YPhCJiyeqMAI2Aqu7bzRQJ0gYH50EBZ31--hdYRFWcY4QdJY6BgrdwVKKUjwYA_XNF5Ct4Wk1BgthcwvsF2a1dN-a0of43LvfyFxdrGXz5HHmTJVZTOgvyjm2c2PoZ03mS2l59l2SIxIM9QNpnL6DfSx-_DiTW0aonuj9NHCsSvsyZEHQ3wXPipCFL8mYTJTPJxOwmtK5wM76EK-cGM4Qd5_AK8v7QcSk0o993AmdMEfhXq8o59Tb5MDXFIGOchiieKSqvq-NoygH12zC6Kjvnr8FY8eKnJRF6yxvssS6aNFsugs38ITDMP67fruAcTLLjx_AwMjghxXY1UWfspc0qpb-6oLZpvQlplm1QEB3Ys0SgwNBlEpsqSnGarCteLd1PdSr2-whMvMHGiQ_Y2PYFgZWvXX6NKMVeDJAlHkRj3YOwwzQutWyfuAr3CAgFm3Es15uWW4FTEVrytx4RzBwBn2at_VRl2eHN0cVaYkK9Wq0lQ1fq3ZjF9h_HX2Zm0QEnriQ69c83OPT0dYwYjmq6NT7W1axDqyfdEaDU8tBxjFcOLPH_7es8DthvTaN80HKySYU4696jEtJeG7v9-8TWzlB--HDlXaFTxQCwv9ZJOZfTPeqXAZqQynoVbepOg0_OrFUtOfYMieL_--T_JtUJoAOI1r4lNne0cysEjy69gwSB4BDLhfjJp0SLpe1oNAxEX4589ff7jtWY5ZK5_f6cHwApHAbNjccviqkmYZQ1kckbgXiRDYhpiCHYJH45cE4uKWpagi8i69Sj9IgYC6ysetmNnUbwlrcjLvCKzA45skLyyOk0RebVg73TTHRJDjcEdCQ1CR0kSAhQfuHkOlsFIgRM1ts2YH-Z5YBIePxl_nLnxGIfgTdDWyc2tper-9TFKToIdxZGnIUTkMAHJAus1a6nhWeLI1YpuD8vxycvjJVJa1tqyzaCVOyf0YxTFSGqhXEdwLfZwVcYYJqtipXxzKAQaS-vEk-GR_o5D4fGxWpW0ZGiXomsQ9XxYU852qR8ZwhR5HvIWrPQA6t1oZ7NpWwhkKZX_1oHmmAIrYqG8X5p__bH6WptyU4OdyZyf4KeoPv_F7-PLtvCena_-nctt6So9zK3-y5UlELzo4V4ncnMhl7rNEOdzWV_277vokQFA5se2y6l9R-lGtz3kp47RZAegJ-pWCNDROUNLbtsAr4CgnE2S3TYfzhcUxWVK7U2yo32FfwVywej18PDDgtNB6qbcDc0rpzXFN8cFzOuUTXtggqNwnbT2l9QyDQ-B0nBeVqfNCrD0echQwlFEioqB0k2PT_LjOwgAX2SfzNQeNuQFWyMCUZW_zuxu3VVPyEH7Xdg3g4WQW8zVpuqaS7Ndamnxl2uk788nDlJ2S9QM5flkPTiHAIb4nio1fB6rj4IOpuDfGnr1pOMzVO9BKWIfPNLx2aXqQVrc2LddGjCXI9eHucAd1Kl7_bP7f_wFbxdcUbgsAAA==";

// Read embed URL from textbox
var txtEmbedUrl = "https://app.powerbi.com/embed?dashboardId=b5f50796-6e97-4dc5-a755-00cf4405e029&tileId=e9c81853-3263-4f30-af4b-63fad7d79627&groupId=be8908da-da25-452e-b220-163f52476cdd&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3d%3d";

// Read dashboard Id from textbox
var tileContainerId = "b5f50796-6e97-4dc5-a755-00cf4405e029";

// Read tile Id from textbox
var txtEmbedTileId = "e9c81853-3263-4f30-af4b-63fad7d79627";
RefreshPowerBi();
function RefreshPowerBi() {

FillPowerBiTile(tileContainerId, txtEmbedTileId, "tileContainer-small");
FillPowerBiTile(tileContainerId, txtEmbedTileId, "tileContainer-large");

}

//var refresh = document.getElementById('refreshId');
//refresh.click(() => RefreshPowerBi());

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
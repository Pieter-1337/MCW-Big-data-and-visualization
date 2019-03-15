// Read embed application token from textbox
var txtAccessToken = "H4sIAAAAAAAEAB2WxQ7sWBJE_-VtPZKZRuqFmdll2rnMzNiaf5_q3qd0b0akIs7ff-z06ac0__PfP8smiZKlwIcP3VCH3AwZk5ins_rkURCcUHXYgk8CD4feGsAVLgfLLXACGDP9AapBF7O-hC-NRFunW0OuA8gWYLAxrZNj7fUUDE1IcJIlM2RnLgkfpb8d4PvPxB-2Ck7YnkCrAxaKh2HZUDP4jcuKzWSysDrLNqb-c5GrQEMVJu9pmLrLPMYuzZkzE-YXTjJFpTyF572-eIxZLQmtySrf8fPsTia3Eg4j8TnhSfzutfrqajDRdG-J_B1aqS2XpB81NBBQZXd5fjwg5upWIH7l4dWfrLyiWHfDaN8QDJCPYCKsWQPBX8caLvK6NzTV5ES1A45bNOdxQcG3FhAiWQsZZdTg73W4B7rrY9WI5Z8qGnEBc4Sjwe-zs4ZWWiXy7xhUjfrdsVzko3XBHtw82pKD4kAAXMNCqtD0OBf_IpE02ucAdWOU46bqJ_eIM4CI1zT-IVCsHox-U4vjGMEgi7k3J1lTHbROvO3NxBHOk1fqYm5W-OocrUgRSKkJMEus6PeAA46f1atWTFEpeMo4Hz--29stOENW6lUF4dNvA9B99svSI5d8VGDs6OBixBqF4Lrs7ggJv6HVd14OH5agUrlFWUkPqISWRxQYpIdwI5ahZrX1-aYh7r1U-eiXhcsAx-4f8dIlkq2v6EUcyoMWal0tjj6TXnnpjSpOpdD3ItwnA0MoQztpExU-Q30YRwwMLwjtAiq9jaNxjiQTZMS2pFIcSt0fHnhImucxewqdEVXHdsPE9i1FoZiSw6dceOqZytJAapAL2Sr3e6wK-4FNck0yvN4ISeJVPHRpTZqAO1jXpLqOxjESxFPS8mx6EIBlnXEK9LkPqKdvlIvv7sVzyvdGeEMX33yHeVq1wNpOJ43qtOD85HN7paS9dravS6kHRMH54AMrCJ88qlafn-tZHZiVvNiyRrWR-464jaX1aCSHfvD-e_S8oLbzyb9yrbrAb-fvDTJi4C1UX6vLca7NOlJfwSDr8RofBviM91c49Fm1QXXpW_8m0Qq8pvv0whnBhpZmyMd6U8Je3GxZozkflk3EbWWiVd6RqKb-IJbFTFMfXFKMbAWvVg6LtFPGVkpvi3eBkZLE9HtwoiWD3N26u4l3lM6rduFQBd-tJxjtujtKk_W5HnsPHdyMRgjUBJIoPjb-lgvUaP3TWTyjbKmAuuI1aslS0FdURcv3o54Q-6SiU2Ndj2FK9tJpxR0H0CUWwMMhwOQ-nUr2tkMbmJM8Dqyi_i7KMmZYpwynVoz4yI9fwt-zxwFXEInaZsnIoOXX3-mZZVe8dT1y54g3ToRZ7k4DJVTpH3GD7jcs0hZ_Rj-JH9gbOAdEnkc_I5j6NFzRlILNJtuwY9W8E8XtIyUAY1A_j-NDlsrWSKbDJnWxl4JFqDeX9Ae8LpDapmBX4bdFW2nKJoMW26xQx87BirKqxp7MER2uQ9OWGgBx7sSbFLZgUsG4R1pyJm2wbpKPvyavDNjc00sPn8abN7pkVCrTHmK2uGCwl64C7gM6UnG1kNWnc6stUHSFcmJV9fngq-XkWZFjLMCjuTo-oVm7-pg9tDmz3WKGD3H1J5wOwjSVQuZJKfbe7DkfQYXtTk1Q0CsRj7McfUEalxXb0osYH34-0ETfn1q1hWDieSoA7hkaJOn-Jazlo0J1E2bfp4YdSCJQg2nMehp_Nd3X5F5RqKudNZCBQMD5aFgUT88jgliPrOWoUl9Q4fURr4VkJHpJ75meVmzfrwlWhD82Yhae3gR61vgNdK6BNhiOKJb5uDjEpyUZDV4dXiCOypb7TyW5MQtYXMqBWkY4mkiNcCf9nn6FLaAWawijG_gGwsDok5GRBMSgafE1ccazp_3Esc3JNVkGhuN6cdHfwlk2B6SYRZtgnQ9nJTJeRVe_cQ6EuIPJm2pEt4PYHxRqZfxuJEBGGfZ7K-3Vkdz3A-3PZ4QRqEsIk12gbxB4vmPQw3ePo5nK-PZt3Bjws60sqrkrjDzykyS-9YoUZaBzTI0NEVfSS42OwzRYjjUxa_dplJE0fjYcOUaNvb1iwbya6U5x8YrPRLGmH9psj7atO30VOYvMiuZgK5oBK2kzSCpYUP0xjfGDUvHtCct08jtCEzoEXN2u7tUvFnNPj4klGml2wf_85w-3PvM-acXzwwmmFoGshwDQxzFlmglTzt-diNyUPFANknU4qKgp1boe9o2GSeDH1luYGiQizDkEtxeT91Lr0RNE2dev6mWGsR3thHEBL1LxO0IaaWjKum6DVRvwdS1DaYKYoDEeXH_kAPpZPTHgr_WwItiAe0qaktWcXr6UBgy2lcgSghRjZZw3QYi4h9C6Z6NIlfS6_tBKogY2y-nskon9kh3SbxbUvwPmwA10q9jhArQ8y-pJ9xbeiMuid1Zrw5lKVaceqvbTRttCojAGeCLRRBXvEoHiIrRzIZsrvBJpO_Sj3DDzxLSOtZKzy2-ibSYGIT8EkVugmgQ9YJYpUTgOltM5bdZ74KbRvP766x-Zn7kuViX4qaxhIZQniqO5qy2fcMgzb3I5_055TTWm-7EWv7EYMfAinY5aUt0BDw2xErMCrLkc-eU7n964qfBaHJRLbSLfLlxBxf_Sv2JC1TkCwmkPf47f6zFBaiGegpaABX8kpLv5hfUtuUgU-6nfmjStpwYV2JSrroeFLuvX7cKpRTkNA_YeKZRSivNh8GODD_xTxH2Enj-uSUAQ5hkvfAGYCFmsZ06KOoRt24QDXtB1nUWDrn98MEQmmOgdri06cDh-YCy3HBXS0M4IHIQ7KtDjbhML1z5IkH1YKi2gO-im25IqjyJpRnSPDLnDERdiK0QbLuyjXBSGYFbNLleTsv5lutcwux_W5es2fUIjVKFVWMO6Tv_1OHscGsl3mor9wc-nfZmfzP_7P3_bZE9CCwAA";

// Read embed URL from textbox
var txtEmbedUrl = "https://app.powerbi.com/embed?dashboardId=b5f50796-6e97-4dc5-a755-00cf4405e029&tileId=e9c81853-3263-4f30-af4b-63fad7d79627&groupId=be8908da-da25-452e-b220-163f52476cdd&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3d%3d";

// Read dashboard Id from textbox
var tileContainerId = "b5f50796-6e97-4dc5-a755-00cf4405e029";

// Read tile Id from textbox
var txtEmbedTileId = "e9c81853-3263-4f30-af4b-63fad7d79627";

FillPowerBiTile(tileContainerId, txtEmbedTileId, "tileContainer-small");
FillPowerBiTile(tileContainerId, txtEmbedTileId, "tileContainer-large");

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
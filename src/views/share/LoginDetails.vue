<template>
    <div class="option-selected" id="login-option">
        <table>
            <tr>
                <th>Vendor</th>
                <th>Account Info Requested</th>
                <th>Action</th>
            </tr>
            <tr>
                <td>Facebook</td>
                <td id="fb-email">Account Email, Business Profile</td>
                <td><a class="hyperlink" id="fb-login">Log In</a></td>
            </tr>
            <tr>
                <td>Amazon</td>
                <td id="az-email">Account Email, Sellers Account</td>
                <td><a class="hyperlink" id="az-login">Log In</a></td>
            </tr>
            <tr>
                <td>eBay</td>
                <td id="eb-email">Account Email, Sellers Account</td>
                <td><a class="hyperlink" id="eb-login" target="_blank">
                    <img src="@/assets/images/icons/ebay.svg" alt="Sign in with eBay" />
                </a></td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                email: {
                    "fb": "",
                    "az": "",
                    "eb": ""
                },
                infoRequested: {
                    "fb": "Account Email, Business Profile",
                    "az": "Account Email, Sellers Account",
                    "eb": "Account Email, Sellers Account"
                },
                accessToken: {
                    "fb": "",
                    "az": "",
                    "eb": ""
                },
                fbUserId: ""
            }
        },

        methods: {
            async loadFacebookSdk(){
                let fbScript = document.createElement('script');
                fbScript.setAttribute('src',
                    "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0&appId=1231710607759110&autoLogAppEvents=1");
                fbScript.setAttribute("nonce", "YWSp6qSR");
                fbScript.setAttribute('defer', "true");
                fbScript.setAttribute("async", "true");
                fbScript.setAttribute("crossorigin", "anonymous");
                document.head.appendChild(fbScript);
            },

            enableLoginStatus(id, email, profileName="Intiva Technologies"){
                this.email[id] = email;
                document.getElementById(`${id}-email`).innerHTML = email + ", " + profileName;

                let actionLink = document.getElementById(`${id}-login`);
                actionLink.id = `${id}-logout`;
                actionLink.innerHTML = "Log Out";
            },

            disableLoginStatus(id){
                this.email[id] = "";
                document.getElementById(`${id}-email`).innerHTML = this.infoRequested[id];

                let actionLink = document.getElementById(`${id}-logout`);
                actionLink.id = `${id}-login`;
                actionLink.innerHTML = "Log In";
            },

            async initFacebookApp(){
                window.fbAsyncInit = function() {
                    FB.init({
                        appId: '1231710607759110',
                        autoLogAppEvents: true,
                        xfbml: true,
                        version: 'v17.0'
                    });

                    let accessMisc = () => {
                        FB.api(`/me?access_token=${this.fbAccessToken}&fields=email`, res => {
                            if(res && !res.error)
                                this.enableLoginStatus('fb', res.email);
                            else
                                console.error("Couldn't access userId response.");
                        });
                    };

                    let accessAccount = (accessToken, userId) => {
                        /*
                        this.accessToken['fb'] = accessToken;
                        console.log("Fb token: " + this.accessToken['fb']);
                        */
                        this.fbUserId = userId;
                        accessMisc();
                    };

                    FB.getLoginStatus(res => {
                        //console.log(res);
                        if(res.status == "connected")
                            accessAccount(res.authResponse.accessToken, res.authResponse.userId);
                    }, { scope: 'email,public_profile' });

                    document.getElementById("fb-login").onclick = () => {
                        if(this.fbAccessToken == ""){
                            FB.login(res => {
                                if(res.status == "connected")
                                    accessAccount(res.authResponse.accessToken, res.authResponse.userId);
                            }, { scope: 'email,public_profile' });
                        }
                    };
                };
            },

            async requestFacebookLogin(){
                await this.loadFacebookSdk();
                await this.initFacebookApp();
            },

            requestEbayLogin(){
                document.getElementById("eb-login").onclick = () => window.location.href
                    = "https://auth.sandbox.ebay.com/oauth2/authorize?client_id=MichaelS-TechLabs-SBX-88778339d-1d6f4685&response_type=code&redirect_uri=Michael_Sinclai-MichaelS-TechLa-dmlmbaokr&scope=https://api.ebay.com/oauth/api_scope https://api.ebay.com/oauth/api_scope/buy.order.readonly https://api.ebay.com/oauth/api_scope/buy.guest.order https://api.ebay.com/oauth/api_scope/sell.marketing.readonly https://api.ebay.com/oauth/api_scope/sell.marketing https://api.ebay.com/oauth/api_scope/sell.inventory.readonly https://api.ebay.com/oauth/api_scope/sell.inventory https://api.ebay.com/oauth/api_scope/sell.account.readonly https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.fulfillment.readonly https://api.ebay.com/oauth/api_scope/sell.fulfillment https://api.ebay.com/oauth/api_scope/sell.analytics.readonly https://api.ebay.com/oauth/api_scope/sell.marketplace.insights.readonly https://api.ebay.com/oauth/api_scope/commerce.catalog.readonly https://api.ebay.com/oauth/api_scope/buy.shopping.cart https://api.ebay.com/oauth/api_scope/buy.offer.auction https://api.ebay.com/oauth/api_scope/commerce.identity.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.email.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.phone.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.address.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.name.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.status.readonly https://api.ebay.com/oauth/api_scope/sell.finances https://api.ebay.com/oauth/api_scope/sell.item.draft https://api.ebay.com/oauth/api_scope/sell.payment.dispute https://api.ebay.com/oauth/api_scope/sell.item https://api.ebay.com/oauth/api_scope/sell.reputation https://api.ebay.com/oauth/api_scope/sell.reputation.readonly https://api.ebay.com/oauth/api_scope/commerce.notification.subscription https://api.ebay.com/oauth/api_scope/commerce.notification.subscription.readonly";

                //let authCode = new URLSearchParams(window.location.search).get('code');
                let authCode = window.location.search.substring(window.location.search.indexOf('&code') + 6,
                    window.location.search.length);
                console.log("authCode: " + authCode);
                if(authCode){
                    fetch('https://intivatechlabs.com:3000/ebay/access-token',
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ authCode: authCode })
                    }).then(res => res.json())
                    .then(data => {
                        console.log(data);
                    }).catch(err => {
                        console.error("An error occurred retrieving the access token.");
                        console.error(err);
                    })
                }
            }
        },

        mounted(){
            //this.requestFacebookLogin();
            //this.requestAmazonLogin();
            //this.requestEbayLogin();
        }
    }
</script>

<style lang="scss">
    #login-option{
        td, th{
            padding: 6pt 0 6pt 6pt;
            border-bottom: solid black 2pt;
            width: 214pt;
            text-align: left;
            font-weight: 400;
        }
        
        th{
            color: white;
            background-color: black;
        }
    }
</style>
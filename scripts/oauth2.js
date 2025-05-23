// eslint-disable-next-line no-unused-vars
const oAuth2 = {
    /**
     * Initialize
     */
    init() {
        this.KEY = 'BaekjoonHub_token';
        this.ACCESS_TOKEN_URL = 'https://github.com/login/oauth/access_token';
        this.AUTHORIZATION_URL = 'https://github.com/login/oauth/authorize';
        this.CLIENT_ID = '975f8d5cf6686dd1faed';
        this.CLIENT_SECRET = '934b2bfc3bb3ad239bc67bdfa81a378b1616dd1e';
        this.REDIRECT_URL = 'https://github.com/'; // for example, https://github.com
        this.SCOPES = ['repo'];
    },

    /**
     * Begin
     */
    begin() {
        this.init(); // secure token params.

        let url = `${this.AUTHORIZATION_URL}?client_id=${this.CLIENT_ID}&redirect_uri${this.REDIRECT_URL}&scope=`;

        for (let i = 0; i < this.SCOPES.length; i += 1) {
            url += this.SCOPES[i];
        }

        browserAPI.storage.local.set({ pipe_baekjoonhub: true }, () => {
            // opening pipe temporarily

            browserAPI.tabs.create({ url, active: true }, function () { // 'selected' 대신 'active' 사용 (최신 API)
                window.close();
                browserAPI.tabs.getCurrent(function (tab) {
                    // chrome.tabs.remove(tab.id, function () {});
                    // 주석 처리된 코드를 그대로 유지합니다
                });
            });
        });
    },
};

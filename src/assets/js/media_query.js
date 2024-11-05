var media_query = {
    isPortrait(){
        return screen.availWidth <= screen.availHeight;
    },

    isMobile(){
        return screen.availWidth < process.env.VUE_APP_MIN_TABLET_WIDTH;
    }
};

export default media_query;
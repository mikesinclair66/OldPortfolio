var fetch_controller = {
    //TODO LOAD ON ALL FETCH CALLS
    SERVER_ADDRESS: {
        ssl: false,
        dest: "localhost",
        port: "3000",
        getString(){
            return "http" + ((this.ssl) ? "s" : "") + "://" + this.dest + ":" + this.port;
        }
    },

    getJson(route, callback=null){
        fetch(this.SERVER_ADDRESS.getString() + route).then(res => res.json())
        .then(data => { if(callback != null) callback(data) })
        .catch(err => console.error(err));
    },

    getDataURL(route, callback=null){
        fetch(this.SERVER_ADDRESS.getString() + route)
        .then(res => res.blob())
        .then(blob => {
            if(callback != null){
                let fr = new FileReader();
                fr.addEventListener("load", ev => callback(ev.target.result));
                fr.readAsDataURL(blob);
            }
        }).catch(err => console.error(err));
    },

    async getAsync(route, callback=null){
        const response = await fetch(this.SERVER_ADDRESS.getString() + route);
        callback(response);
    },

    post(route, body, callback=null){
        fetch(this.SERVER_ADDRESS.getString() + route, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(res => res.json())
        .then(data => { if(callback != null) callback(data) })
        .catch(err => console.error(err));
    },

    put(route, body, callback=null){
        fetch(this.SERVER_ADDRESS.getString() + route, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(res => res.json())
        .then(data => { if(callback != null) callback(data) })
        .catch(err => console.error(err));
    }
};

export default fetch_controller;
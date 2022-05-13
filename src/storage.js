
const storageManager = function(key, value, replacer, action='load') {
    function storageAvailable(type) {
        let storage;
        try {
            storage = window[type];
            let x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch(e) {
            return e instanceof DOMException && (
                // everything except Firefox
                e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                // acknowledge QuotaExceededError only if there's something already stored
                (storage && storage.length !== 0);
        }
    }

    if (storageAvailable('localStorage')) {
        const protoType = Object.getPrototypeOf(value[0]);
        // Yippee! We can use localStorage awesomeness
        if(!localStorage.getItem(key) || action == 'set') {
            setLocalStorageData(key, value, replacer);
        }
        let loadedValues = getLocalStorageData(key);
        value.length = 0;
        for (let item in loadedValues){
            value.push((Object.setPrototypeOf(loadedValues[item], protoType)));
        }
    } else {
        // Too bad, no localStorage for us
        console.log('no localStorage available');
    }    
}
const setLocalStorageData = function (key, value, replacers=null){
    localStorage.setItem(key, JSON.stringify(value, replacers, value.length));    
}

const getLocalStorageData = function(key) {
    let value =(JSON.parse(localStorage.getItem(key)));
    return value;
}
export { storageManager };
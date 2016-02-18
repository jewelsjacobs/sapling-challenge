import { Firebase } from "firebase";

const endpoint = "https://samplechat.firebaseio-demo.com/";
const myFirebaseRef = new Firebase(endpoint);

export function sink(moviesData) {
    // Observe all movies data and post them to firebase
    let moviesList = moviesData.list.toJS();
    myFirebaseRef.set(JSON.stringify(moviesList));
};

export function source() {
    myFirebaseRef.on("value", function(snapshot) {
        let initialMoviesData = fromJS({
            data: snapshot.val() || []
        });
        return Rx.Observable.just(initialMoviesData);
    }, function (errorObject) {
        try {
            throw new Error("The read failed: " + errorObject.code);
        } catch (e) {
            console.log(e.message);
        }
    });
};
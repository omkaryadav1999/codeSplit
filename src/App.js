import React, { Suspense } from "react";
import History from "./history"
// console.log(add(50, 10));

// code splitting;

//method 1st
// import("./math").then((math) => {
//     console.log(math.add(10, 50)) 
// });

// method 2nd;

const First = React.lazy(() => import("./math")) // the varibale name is always in capital letter.


function App() {
    return (
        <>
            <h1>code splitting ,by the two way 1.by the noraml and by the lazy</h1>
            <Suspense fallback={<h1 style={{ color: "red" }}>loding....</h1>}>
                <First />
            </Suspense>
            <History />
        </>
    )
}
export default App
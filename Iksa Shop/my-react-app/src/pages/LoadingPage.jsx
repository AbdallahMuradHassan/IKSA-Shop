import React from 'react'
import "../assets/css/Loading.css"
function LoadingPage() {
    return (<>
        <div class="hourglassBackground">
            <div class="hourglassContainer">
                <div class="hourglassCurves"></div>
                <div class="hourglassCapTop"></div>
                <div class="hourglassGlassTop"></div>
                <div class="hourglassSand"></div>
                <div class="hourglassSandStream"></div>
                <div class="hourglassCapBottom"></div>
                <div class="hourglassGlass"></div>
            </div>
        </div>
    </>)
}

export default LoadingPage
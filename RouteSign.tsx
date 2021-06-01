import React from 'react';

const RouteSign: React.FC<{no: number}> = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="455" height="435" id="svg2">
    <defs id="defs4"/>
    <path d="M 226.99991,425.39429 C 252.11645,425.39429 275.26756,415.76966 293.19578,399.78937 C 362.13553,330.75326 413.14928,244.91516 439.46426,150.46104 C 442.20297,142.16307 443.99982,131.7287 443.99982,120.87729 C 443.99982,76.02669 413.30428,38.28204 369.9794,27.07436 C 323.9411,15.75291 277.71818,9.99998 226.99992,9.99998 C 176.28166,9.99998 130.05873,15.75291 84.02044,27.07436 C 40.69555,38.28204 10.00001,76.02669 10.00001,120.87729 C 10.00001,131.7287 11.79686,142.16307 14.53557,150.46104 C 40.85055,244.91516 91.86431,330.75326 160.80406,399.78937 C 178.73227,415.76966 201.88339,425.39429 226.99991,425.39429 z" id="plate" style={{
      fill:"#0140ff", fillOpacity: 1, stroke: "#ffffff", strokeWidth: 15.99999905, strokeLinecap: "butt",
      strokeLinejoin: "round", strokeMiterlimit: 4, strokeDasharray: "none", strokeOpacity: 1}}/>
    <text x="50%" y="62%" id="route-no" style={{fontSize: 185, fontWeight: 600, textAlign: "center", lineHeight: "125", textAnchor: "middle", fill: "#ffffff", fillOpacity: 1, display: "inline", fontFamily: "Helvetica"}}>{props.no}</text>
    <text x="238.12193" y="323.19922" transform="scale(0.951145,1.051364)" id="route" style={{fontSize: 45, textAlign: "center", lineHeight:125, textAnchor:"middle", fill:"#ffffff", fillOpacity:1, stroke:"none", strokeWidth:1, strokeLinecap:"butt", strokeLinejoin:"miter", strokeOpacity:1, display:"inline", fontFamily:"sans-serif"}}>ROUTE</text>
    <path d="M 226.99991,432.09564 C 252.92666,432.09564 276.82458,422.16047 295.33113,405.66458 C 366.49473,334.40102 419.15408,245.79335 446.31792,148.29167 C 449.14498,139.72597 450.9998,128.95493 450.9998,117.7534 C 450.9998,71.4557 419.31408,32.49322 374.59162,20.92392 C 327.06823,9.23718 279.35424,3.29864 226.99991,3.29864 C 174.64558,3.29864 126.93159,9.23718 79.40821,20.92392 C 34.68574,32.49322 3.00002,71.4557 3.00002,117.7534 C 3.00002,128.95493 4.85483,139.72597 7.68189,148.29167 C 34.84574,245.79335 87.50509,334.40102 158.66871,405.66458 C 177.17524,422.16047 201.07317,432.09564 226.99991,432.09564 z" id="line" style={{fill:"none", fillOpacity:1, stroke:"#a0a0a0", strokeWidth:1.9999994, strokeLinecap:"butt", strokeLinejoin:"round", strokeMiterlimit:4, strokeDasharray:"none", strokeOpacity:1, display:"inline"}}/>
    <path d="M 297.94123,50.59376 C 296.0089,50.85725 296.02792,53.33515 295.18341,54.65626 C 294.57803,55.98989 293.89381,57.32001 293.14435,58.5547 C 289.97109,58.51222 286.60477,58.63911 283.5506,58.4922 C 283.61831,56.44435 282.12104,54.65541 281.54279,52.72657 C 281.25683,51.40823 280.03361,50.2006 278.58966,50.68751 C 276.87595,51.08072 276.81854,53.3601 277.71459,54.57684 C 278.05808,55.81295 279.39605,57.70744 279.15216,58.5547 C 276.36079,58.7026 273.48574,58.27506 270.7381,58.73438 C 268.9843,59.50733 269.50654,62.74385 271.54279,62.67188 C 276.20912,62.69038 280.87618,62.67429 285.54279,62.6797 C 284.83458,63.6515 285.02173,65.98378 283.3631,65.5547 C 280.63275,65.68642 277.83255,65.31069 275.13654,65.70313 C 273.3133,66.43477 274.16478,68.89156 273.97248,70.3672 C 274.02982,77.68961 273.86118,85.03425 274.0506,92.34376 C 274.50446,94.21201 276.93734,93.65068 278.31623,93.71095 C 286.62354,93.66096 294.94994,93.80891 303.24591,93.64063 C 304.84631,93.39524 304.8803,91.42032 304.72248,90.1797 C 304.66558,82.43795 304.83316,74.67423 304.64435,66.94532 C 304.16553,65.07032 301.72384,65.58795 300.31623,65.5547 C 296.53498,65.5547 292.75373,65.5547 288.97248,65.5547 C 289.38721,64.60647 289.78898,63.66066 290.08966,62.6797 C 295.66282,62.60671 301.26946,62.81902 306.82404,62.58595 C 308.85627,62.08422 308.51477,58.42264 306.28498,58.5547 C 303.50633,58.5547 300.72768,58.5547 297.94904,58.5547 C 298.85368,56.50775 300.20587,54.46687 300.32404,52.20313 C 300.20572,51.06093 299.02887,50.44165 297.94123,50.59376 z M 258.60529,52.12501 C 256.79067,52.28004 255.93203,55.02246 257.62873,55.96876 C 260.53331,57.8305 263.09696,60.17796 265.62091,62.47657 C 267.4138,63.61595 269.66799,61.04248 268.33966,59.40626 C 265.73257,56.6208 262.67622,54.17629 259.39435,52.20313 C 259.13952,52.1265 258.87137,52.0969 258.60529,52.12501 z M 146.1756,52.35938 C 144.53796,52.4777 144.24836,54.43134 144.47248,55.7422 C 144.51531,70.37849 144.38758,85.02817 144.53498,99.65626 C 144.91063,101.50205 147.24754,101.19025 148.62873,101.14845 C 162.91869,101.11116 177.22189,101.22248 191.50373,101.09376 C 193.18898,100.8998 193.26149,98.82259 193.09748,97.52345 C 193.0546,82.96264 193.18243,68.38877 193.03498,53.83595 C 192.67381,51.98276 190.33164,52.27363 188.94123,52.33595 C 174.68653,52.35171 160.42786,52.3045 146.1756,52.35938 z M 188.72248,56.71095 C 188.72248,70.09636 188.72248,83.48178 188.72248,96.8672 C 175.43081,96.8672 162.13914,96.8672 148.84748,96.8672 C 148.84748,83.48178 148.84748,70.09636 148.84748,56.71095 C 162.13914,56.71095 175.43081,56.71095 188.72248,56.71095 z M 153.52716,60.59376 C 151.23352,60.52108 150.97798,64.39968 153.15216,64.76563 C 157.49653,64.93978 161.86827,64.7817 166.22248,64.83595 C 166.22248,67.3672 166.22248,69.89845 166.22248,72.4297 C 162.35532,72.53493 158.43563,72.2295 154.59748,72.56251 C 152.63923,73.13474 152.99353,76.5713 155.07404,76.64845 C 158.78675,76.72525 162.50703,76.65601 166.22248,76.6797 C 166.22248,80.58595 166.22248,84.4922 166.22248,88.39845 C 161.5336,88.47764 156.78418,88.2473 152.12873,88.50001 C 150.06694,88.96554 150.31978,92.59344 152.48029,92.71095 C 163.67602,92.74678 174.89073,92.79548 186.08185,92.68751 C 188.31856,92.3565 188.09738,88.31086 185.73029,88.39845 C 180.64435,88.39845 175.55841,88.39845 170.47248,88.39845 C 170.47248,84.4922 170.47248,80.58595 170.47248,76.6797 C 174.67335,76.58793 178.93669,76.85153 183.10529,76.57032 C 185.19778,76.05955 184.81532,72.31004 182.5506,72.4297 C 178.52456,72.4297 174.49852,72.4297 170.47248,72.4297 C 170.47248,69.89845 170.47248,67.3672 170.47248,64.83595 C 175.35217,64.75405 180.26942,64.99085 185.12873,64.73438 C 187.16854,64.26878 186.9546,60.68255 184.77716,60.60938 C 174.36381,60.55974 163.94131,60.59125 153.52716,60.59376 z M 300.50373,69.71095 C 300.12724,70.86571 301.42555,73.69527 299.50373,73.3047 C 292.40998,73.3047 285.31623,73.3047 278.22248,73.3047 C 278.59896,72.14993 277.30065,69.32037 279.22248,69.71095 C 286.31623,69.71095 293.40998,69.71095 300.50373,69.71095 z M 257.15216,71.43751 C 254.73351,71.43876 254.80148,75.70609 257.19904,75.67188 C 259.59192,75.69098 261.98556,75.67385 264.37873,75.6797 C 264.37873,80.68751 264.37873,85.69532 264.37873,90.70313 C 261.89915,93.65423 258.63507,95.898 255.60529,98.25001 C 254.57186,99.55778 255.66093,101.83397 257.40998,101.58595 C 259.32729,101.41452 260.47265,99.46411 262.02768,98.52302 C 263.36226,97.46058 264.73814,96.2046 266.00373,95.20313 C 269.2338,99.4958 275.07585,100.63595 280.20683,100.73747 C 289.0655,100.69844 297.94835,100.83714 306.79279,100.67188 C 308.92074,100.21826 308.4618,96.45757 306.23029,96.58595 C 296.85622,96.51657 287.4751,96.72384 278.10529,96.48438 C 274.8154,96.13314 270.70239,95.48273 269.04279,92.21095 C 268.19563,89.58184 268.88125,86.71174 268.65998,83.9922 C 268.57322,80.25354 268.82169,76.47696 268.55841,72.75782 C 267.98177,70.83488 265.46254,71.54579 264.00373,71.4297 C 261.72019,71.43538 259.43439,71.41863 257.15216,71.43751 z M 177.08966,77.25001 C 175.3772,77.36714 174.32684,79.7354 175.67782,80.98077 C 177.15323,82.78756 178.2058,84.94815 179.35529,86.96095 C 180.5688,88.3277 183.28948,87.36431 183.03498,85.4297 C 182.73889,83.48683 181.14181,81.98109 180.31149,80.23855 C 179.44341,79.10812 178.88662,77.0363 177.08966,77.25001 z M 300.50373,77.52345 C 300.1286,78.7004 301.331,81.45489 299.75373,81.4297 C 292.57664,81.4297 285.39956,81.4297 278.22248,81.4297 C 278.5976,80.25274 277.3952,77.49826 278.97248,77.52345 C 286.14956,77.52345 293.32664,77.52345 300.50373,77.52345 z M 300.50373,85.64845 C 300.12462,86.81101 301.33734,89.56539 299.75373,89.52345 C 292.57664,89.52345 285.39956,89.52345 278.22248,89.52345 C 278.60158,88.36088 277.38887,85.6065 278.97248,85.64845 C 286.14956,85.64845 293.32664,85.64845 300.50373,85.64845 z" id="kokudo" style={{fontSize:62.30088425, fontStyle:"normal", fontVariant:"normal", fontWeight:"normal", fontStretch:"normal", textAlign:"start", lineHeight:125, textAnchor:"start", fill:"#ffffff", fillOpacity:1, stroke:"none", strokeWidth:1, strokeLinecap:"butt", strokeLinejoin:"miter", strokeOpacity:1, display:"inline", fontFamily:"AnitoLkyohkan"}}/>
  </svg>
}

export default RouteSign;

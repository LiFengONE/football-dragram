<template>
  <div class="pitch">
    <img class="header" src="../assets/header.png">
    <div class="pick">
      <span>Pick your pitch</span>
    </div>
    <ul class="choices">
      <li class="choice">
        <div class="image">
          <router-link :to="{path:'/diagram/' + type + '/1'}">
            <template v-if="type === 'coach'">
              <svg xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 370.75 571.39">
                <title>Full Pitch</title>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="TCM">
                    <rect x="1" y="1" width="368.75" height="569.39" style="fill: rgb(255, 255, 255); stroke: rgb(213, 213, 213); stroke-width: 8px;"></rect>
                    <line x1="369.48" y1="285.7" x2="0.73" y2="285.7" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 8px;"></line>
                    <circle cx="185.38" cy="285.7" r="49.62" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 8px;"></circle>
                    <polyline points="294.36 1 294.36 90.48 76.25 90.48 76.25 1" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 8px;"></polyline>
                    <path d="M225.1,90.48a49.63,49.63,0,0,1-79.59-.37" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 8px;"></path>
                    <polyline points="234.24 1 234.24 30.82 135.43 30.82 135.43 1" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 8px;"></polyline>
                    <circle cx="185.38" cy="60.65" r="1.5" style="fill: rgb(213, 213, 213);"></circle>
                    <polyline points="294.36 570.59 294.36 481.11 76.25 481.11 76.25 570.59" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 8px;"></polyline>
                    <path d="M225.1,481.11a49.64,49.64,0,0,0-79.59.36" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 8px;"></path>
                    <polyline points="234.24 570.59 234.24 540.76 135.43 540.76 135.43 570.59" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 8px;"></polyline>
                    <circle cx="185.38" cy="510.93" r="1.5" style="fill: rgb(213, 213, 213);"></circle>
                  </g>
                </g>
              </svg>
            </template>
            <template v-else>
              <svg xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 370.75 571.39">
                <title><!-- react-text: 148 -->Asset 10<!-- /react-text --></title>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="USSF">
                    <rect x="171.14" y="-168.46" width="28.47" height="368.75" transform="translate(201.29 -169.46) rotate(90)" style="fill: rgb(129, 190, 111);"></rect>
                    <rect x="171.14" y="-139.99" width="28.47" height="368.75" transform="translate(229.76 -140.99) rotate(90)" style="fill: rgb(166, 206, 147);"></rect>
                    <rect x="171.14" y="-111.52" width="28.47" height="368.75" transform="translate(258.23 -112.52) rotate(90)" style="fill: rgb(129, 190, 111);"></rect>
                    <rect x="171.14" y="-83.05" width="28.47" height="368.75" transform="translate(286.7 -84.05) rotate(90)" style="fill: rgb(166, 206, 147);"></rect>
                    <rect x="171.14" y="-54.58" width="28.47" height="368.75" transform="translate(315.17 -55.58) rotate(90)" style="fill: rgb(129, 190, 111);"></rect>
                    <rect x="171.14" y="-26.11" width="28.47" height="368.75" transform="translate(343.64 -27.11) rotate(90)" style="fill: rgb(166, 206, 147);"></rect>
                    <rect x="171.14" y="2.02" width="28.47" height="368.75" transform="translate(371.77 1.02) rotate(90)" style="fill: rgb(129, 190, 111);"></rect>
                    <rect x="171.14" y="30.49" width="28.47" height="368.75" transform="translate(400.24 29.49) rotate(90)" style="fill: rgb(166, 206, 147);"></rect>
                    <rect x="171.14" y="58.36" width="28.47" height="368.75" transform="translate(428.11 57.36) rotate(90)" style="fill: rgb(129, 190, 111);"></rect>
                    <rect x="171.14" y="86.83" width="28.47" height="368.75" transform="translate(456.58 85.83) rotate(90)" style="fill: rgb(166, 206, 147);"></rect>
                    <rect x="171.14" y="115.56" width="28.47" height="368.75" transform="translate(485.31 114.56) rotate(90)" style="fill: rgb(129, 190, 111);"></rect>
                    <rect x="171.14" y="144.03" width="28.47" height="368.75" transform="translate(513.78 143.03) rotate(90)" style="fill: rgb(166, 206, 147);"></rect>
                    <rect x="171.14" y="172.5" width="28.47" height="368.75" transform="translate(542.25 171.5) rotate(90)" style="fill: rgb(129, 190, 111);"></rect>
                    <rect x="171.14" y="200.97" width="28.47" height="368.75" transform="translate(570.72 199.97) rotate(90)" style="fill: rgb(166, 206, 147);"></rect>
                    <rect x="171.14" y="229.44" width="28.47" height="368.75" transform="translate(599.19 228.44) rotate(90)" style="fill: rgb(129, 190, 111);"></rect>
                    <rect x="171.14" y="257.91" width="28.47" height="368.75" transform="translate(627.66 256.91) rotate(90)" style="fill: rgb(166, 206, 147);"></rect>
                    <rect x="171.14" y="286.04" width="28.47" height="368.75" transform="translate(655.79 285.04) rotate(90)" style="fill: rgb(129, 190, 111);"></rect>
                    <rect x="171.14" y="314.51" width="28.47" height="368.75" transform="translate(684.26 313.51) rotate(90)" style="fill: rgb(166, 206, 147);"></rect>
                    <rect x="171.14" y="342.38" width="28.47" height="368.75" transform="translate(712.13 341.38) rotate(90)" style="fill: rgb(129, 190, 111);"></rect>
                    <rect x="171.14" y="370.85" width="28.47" height="368.75" transform="translate(740.6 369.85) rotate(90)" style="fill: rgb(166, 206, 147);"></rect>
                    <rect x="1" y="1" width="368.75" height="569.39" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 8px;"></rect>
                    <line x1="369.75" y1="285.7" x2="1" y2="285.7" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 8px;"></line>
                    <circle cx="185.38" cy="285.7" r="49.62" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 8px;"></circle>
                    <polyline points="294.43 1 294.43 90.48 76.32 90.48 76.32 1" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 8px;"></polyline>
                    <path d="M225.17,90.48a49.63,49.63,0,0,1-79.59-.37" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 8px;"></path>
                    <polyline points="234.78 1 234.78 30.82 135.97 30.82 135.97 1" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 8px;"></polyline>
                    <circle cx="185.38" cy="60.65" r="1.5" style="fill: rgb(255, 255, 255);"></circle>
                    <polyline points="294.43 570.59 294.43 481.11 76.32 481.11 76.32 570.59" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 8px;"></polyline>
                    <path d="M225.17,481.11a49.64,49.64,0,0,0-79.59.36" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 8px;"></path>
                    <polyline points="234.78 570.59 234.78 540.76 135.97 540.76 135.97 570.59" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 8px;"></polyline>
                    <circle cx="185.38" cy="510.93" r="1.5" style="fill: rgb(255, 255, 255);"></circle>
                  </g>
                </g>
              </svg>
            </template>
          </router-link>
        </div>
        <div class="text">
          Full Pitch
        </div>
      </li>
      <li class="choice">
        <div class="image">
          <router-link :to="{path:'/diagram/' + type + '/2'}">
            <template v-if="type === 'coach'">
              <svg id="TCM" xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 571.39 370.75">
                <title>Full Pitch Side On</title>
                <rect x="1" y="1" width="569.39" height="368.75" style="fill: rgb(255, 255, 255); stroke: rgb(213, 213, 213); stroke-width: 5px;"></rect>
                <line x1="285.7" y1="1.27" x2="285.7" y2="370.02" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></line>
                <circle cx="285.7" cy="185.38" r="49.62" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></circle>
                <polyline points="1 76.39 90.48 76.39 90.48 294.5 1 294.5" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></polyline>
                <path d="M90.48,145.65a49.63,49.63,0,0,1-.37,79.59" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></path>
                <polyline points="1 136.52 30.82 136.52 30.82 235.32 1 235.32" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></polyline>
                <circle cx="60.65" cy="185.38" r="1.5" style="fill: rgb(213, 213, 213);"></circle>
                <polyline points="570.59 76.39 481.11 76.39 481.11 294.5 570.59 294.5" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></polyline>
                <path d="M481.11,145.65a49.64,49.64,0,0,0,.36,79.59" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></path>
                <polyline points="570.59 136.52 540.76 136.52 540.76 235.32 570.59 235.32" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></polyline>
                <circle cx="510.93" cy="185.38" r="1.5" style="fill: rgb(213, 213, 213);"></circle>
              </svg>
            </template>
            <template v-else>
              <svg xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 571.39 370.75"><title><!-- react-text: 194 -->Asset 6<!-- /react-text --></title><g id="Layer_2" data-name="Layer 2"><g id="USSF"><rect x="1.68" y="1" width="28.47" height="368.75" style="fill: rgb(129, 190, 111);"></rect><rect x="30.15" y="1" width="28.47" height="368.75" style="fill: rgb(166, 206, 147);"></rect><rect x="58.62" y="1" width="28.47" height="368.75" style="fill: rgb(129, 190, 111);"></rect><rect x="87.09" y="1" width="28.47" height="368.75" style="fill: rgb(166, 206, 147);"></rect><rect x="115.56" y="1" width="28.47" height="368.75" style="fill: rgb(129, 190, 111);"></rect><rect x="144.03" y="1" width="28.47" height="368.75" style="fill: rgb(166, 206, 147);"></rect><rect x="172.16" y="1" width="28.47" height="368.75" style="fill: rgb(129, 190, 111);"></rect><rect x="200.63" y="1" width="28.47" height="368.75" style="fill: rgb(166, 206, 147);"></rect><rect x="228.5" y="1" width="28.47" height="368.75" style="fill: rgb(129, 190, 111);"></rect><rect x="256.97" y="1" width="28.47" height="368.75" style="fill: rgb(166, 206, 147);"></rect><rect x="285.7" y="1" width="28.47" height="368.75" style="fill: rgb(129, 190, 111);"></rect><rect x="314.17" y="1" width="28.47" height="368.75" style="fill: rgb(166, 206, 147);"></rect><rect x="342.64" y="1" width="28.47" height="368.75" style="fill: rgb(129, 190, 111);"></rect><rect x="371.11" y="1" width="28.47" height="368.75" style="fill: rgb(166, 206, 147);"></rect><rect x="399.58" y="1" width="28.47" height="368.75" style="fill: rgb(129, 190, 111);"></rect><rect x="428.05" y="1" width="28.47" height="368.75" style="fill: rgb(166, 206, 147);"></rect><rect x="456.18" y="1" width="28.47" height="368.75" style="fill: rgb(129, 190, 111);"></rect><rect x="484.65" y="1" width="28.47" height="368.75" style="fill: rgb(166, 206, 147);"></rect><rect x="512.52" y="1" width="28.47" height="368.75" style="fill: rgb(129, 190, 111);"></rect><rect x="540.99" y="1" width="28.47" height="368.75" style="fill: rgb(166, 206, 147);"></rect><rect x="1" y="1" width="569.39" height="368.75" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></rect><line x1="285.7" y1="1" x2="285.7" y2="369.75" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></line><circle cx="285.7" cy="185.38" r="49.62" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></circle><polyline points="1 76.32 90.48 76.32 90.48 294.43 1 294.43" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></polyline><path d="M90.48,145.58a49.63,49.63,0,0,1-.37,79.59" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></path><polyline points="1 135.97 30.82 135.97 30.82 234.78 1 234.78" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></polyline><circle cx="60.65" cy="185.38" r="1.5" style="fill: rgb(255, 255, 255);"></circle><polyline points="570.59 76.32 481.11 76.32 481.11 294.43 570.59 294.43" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></polyline><path d="M481.11,145.58a49.64,49.64,0,0,0,.36,79.59" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></path><polyline points="570.59 135.97 540.76 135.97 540.76 234.78 570.59 234.78" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></polyline><circle cx="510.93" cy="185.38" r="1.5" style="fill: rgb(255, 255, 255);"></circle></g></g></svg>
            </template>
          </router-link>
        </div>
        <div class="text">
          Full Pitch Side On
        </div>
      </li>
      <li class="choice">
        <div class="image">
          <router-link :to="{path:'/diagram/' + type + '/3'}">
            <template v-if="type === 'coach'">
              <svg xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 370.75 429.05">
                <title>Asset 14</title>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="TCM">
                    <rect x="1" y="1" width="368.75" height="427.05" style="fill: rgb(255, 255, 255); stroke: rgb(213, 213, 213); stroke-width: 5px;"></rect>
                    <line x1="369.48" y1="285.7" x2="0.73" y2="285.7" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></line>
                    <circle cx="185.38" cy="285.7" r="49.62" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></circle>
                    <polyline points="294.36 1 294.36 90.48 76.25 90.48 76.25 1" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></polyline>
                    <path d="M225.1,90.48a49.63,49.63,0,0,1-79.59-.37" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></path>
                    <polyline points="234.24 1 234.24 30.82 135.43 30.82 135.43 1" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></polyline>
                    <circle cx="185.38" cy="60.65" r="1.5" style="fill: rgb(213, 213, 213);"></circle>
                  </g>
                </g>
              </svg>
            </template>
            <template v-else>
              <svg xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 370.75 429.05"><title><!-- react-text: 240 -->Asset 15<!-- /react-text --></title><g id="Layer_2" data-name="Layer 2"><g id="USSF"><rect x="171.14" y="-168.46" width="28.47" height="368.75" transform="translate(201.29 -169.46) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="-139.99" width="28.47" height="368.75" transform="translate(229.76 -140.99) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="-111.52" width="28.47" height="368.75" transform="translate(258.23 -112.52) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="-83.05" width="28.47" height="368.75" transform="translate(286.7 -84.05) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="-54.58" width="28.47" height="368.75" transform="translate(315.17 -55.58) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="-26.11" width="28.47" height="368.75" transform="translate(343.64 -27.11) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="2.02" width="28.47" height="368.75" transform="translate(371.77 1.02) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="30.49" width="28.47" height="368.75" transform="translate(400.24 29.49) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="58.36" width="28.47" height="368.75" transform="translate(428.11 57.36) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="86.83" width="28.47" height="368.75" transform="translate(456.58 85.83) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="115.56" width="28.47" height="368.75" transform="translate(485.31 114.56) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="144.03" width="28.47" height="368.75" transform="translate(513.78 143.03) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="172.5" width="28.47" height="368.75" transform="translate(542.25 171.5) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="200.97" width="28.47" height="368.75" transform="translate(570.72 199.97) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="229.44" width="28.47" height="368.75" transform="translate(599.19 228.44) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="1" y="1" width="368.75" height="427.05" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></rect><line x1="369.75" y1="285.7" x2="1" y2="285.7" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></line><circle cx="185.38" cy="285.7" r="49.62" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></circle><polyline points="294.43 1 294.43 90.48 76.32 90.48 76.32 1" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></polyline><path d="M225.17,90.48a49.63,49.63,0,0,1-79.59-.37" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></path><polyline points="234.78 1 234.78 30.82 135.97 30.82 135.97 1" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></polyline><circle cx="185.38" cy="60.65" r="1.5" style="fill: rgb(255, 255, 255);"></circle></g></g></svg>
            </template>
          </router-link>
        </div>
        <div class="text">
          Three Quarter Pitch
        </div>
      </li>
      <li class="choice">
        <div class="image">
          <router-link :to="{path:'/diagram/' + type + '/4'}">
            <template v-if="type === 'coach'">
              <svg id="TCM" xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 370.8 429.05">
                <title>Three Quarter Pitch Defensive</title>
                <rect x="0.89" y="1.11" width="368.75" height="427.05" style="fill: rgb(255, 255, 255); stroke: rgb(213, 213, 213); stroke-width: 5px;"></rect>
                <line x1="1.16" y1="143.46" x2="369.91" y2="143.46" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></line>
                <circle cx="185.27" cy="143.46" r="49.62" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></circle>
                <polyline points="76.28 428.15 76.28 338.68 294.39 338.68 294.39 428.15" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></polyline>
                <path d="M145.54,338.68a49.64,49.64,0,0,1,79.59.36" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></path>
                <polyline points="136.41 428.15 136.41 398.33 235.21 398.33 235.21 428.15" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></polyline>
                <circle cx="185.27" cy="368.5" r="1.5" style="fill: rgb(213, 213, 213);"></circle>
              </svg>
            </template>
            <template v-else>
              <svg id="USSF" xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 370.8 429.05"><title><!-- react-text: 277 -->3-4 Pitch copy<!-- /react-text --></title><rect x="171.25" y="228.87" width="28.47" height="368.75" transform="translate(-227.76 598.73) rotate(-90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.25" y="200.4" width="28.47" height="368.75" transform="translate(-199.29 570.26) rotate(-90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.25" y="171.93" width="28.47" height="368.75" transform="translate(-170.82 541.79) rotate(-90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.25" y="143.46" width="28.47" height="368.75" transform="translate(-142.35 513.32) rotate(-90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.25" y="114.99" width="28.47" height="368.75" transform="translate(-113.88 484.85) rotate(-90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.25" y="86.52" width="28.47" height="368.75" transform="translate(-85.41 456.38) rotate(-90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.25" y="58.39" width="28.47" height="368.75" transform="translate(-57.28 428.25) rotate(-90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.25" y="29.92" width="28.47" height="368.75" transform="translate(-28.81 399.78) rotate(-90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.25" y="2.05" width="28.47" height="368.75" transform="translate(-0.94 371.91) rotate(-90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.25" y="-26.42" width="28.47" height="368.75" transform="translate(27.53 343.44) rotate(-90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.25" y="-55.15" width="28.47" height="368.75" transform="translate(56.26 314.71) rotate(-90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.25" y="-83.62" width="28.47" height="368.75" transform="translate(84.73 286.24) rotate(-90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.25" y="-112.09" width="28.47" height="368.75" transform="translate(113.2 257.77) rotate(-90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.25" y="-140.56" width="28.47" height="368.75" transform="translate(141.67 229.3) rotate(-90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.25" y="-169.03" width="28.47" height="368.75" transform="translate(170.14 200.83) rotate(-90)" style="fill: rgb(129, 190, 111);"></rect><rect x="1.11" y="1.11" width="368.75" height="427.05" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></rect><line x1="1.11" y1="143.46" x2="369.86" y2="143.46" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></line><circle cx="185.48" cy="143.46" r="49.62" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></circle><polyline points="76.43 428.15 76.43 338.68 294.54 338.68 294.54 428.15" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></polyline><path d="M145.69,338.68a49.64,49.64,0,0,1,79.59.36" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></path><polyline points="136.08 428.15 136.08 398.33 234.89 398.33 234.89 428.15" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></polyline><circle cx="185.48" cy="368.5" r="1.5" style="fill: rgb(255, 255, 255);"></circle></svg>
            </template>
          </router-link>
        </div>
        <div class="text">
          Three Quarter Pitch Defensive
        </div>
      </li>

      <li class="choice">
        <div class="image">
          <router-link :to="{path:'/diagram/' + type + '/5'}">
            <template v-if="type === 'coach'">
              <svg xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 429.05 370.75"><title><!-- react-text: 240 -->Asset 17<!-- /react-text --></title><g id="Layer_2" data-name="Layer 2"><g id="TCM"><rect x="1" y="1" width="427.05" height="368.75" style="fill: rgb(255, 255, 255); stroke: rgb(213, 213, 213); stroke-width: 5px;"></rect><line x1="285.7" y1="1.27" x2="285.7" y2="370.02" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></line><circle cx="285.7" cy="185.38" r="49.62" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></circle><polyline points="1 76.39 90.48 76.39 90.48 294.5 1 294.5" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></polyline><path d="M90.48,145.65a49.63,49.63,0,0,1-.37,79.59" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></path><polyline points="1 136.52 30.82 136.52 30.82 235.32 1 235.32" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></polyline><circle cx="60.65" cy="185.38" r="1.5" style="fill: rgb(213, 213, 213);"></circle></g></g></svg>
            </template>
            <template v-else>
              <svg xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 429.05 370.75"><title><!-- react-text: 312 -->Asset 16<!-- /react-text --></title><g id="Layer_2" data-name="Layer 2"><g id="USSF"><rect x="1.68" y="1" width="28.47" height="368.75" style="fill: rgb(129, 190, 111);"></rect><rect x="30.15" y="1" width="28.47" height="368.75" style="fill: rgb(166, 206, 147);"></rect><rect x="58.62" y="1" width="28.47" height="368.75" style="fill: rgb(129, 190, 111);"></rect><rect x="87.09" y="1" width="28.47" height="368.75" style="fill: rgb(166, 206, 147);"></rect><rect x="115.56" y="1" width="28.47" height="368.75" style="fill: rgb(129, 190, 111);"></rect><rect x="144.03" y="1" width="28.47" height="368.75" style="fill: rgb(166, 206, 147);"></rect><rect x="172.16" y="1" width="28.47" height="368.75" style="fill: rgb(129, 190, 111);"></rect><rect x="200.63" y="1" width="28.47" height="368.75" style="fill: rgb(166, 206, 147);"></rect><rect x="228.5" y="1" width="28.47" height="368.75" style="fill: rgb(129, 190, 111);"></rect><rect x="256.97" y="1" width="28.47" height="368.75" style="fill: rgb(166, 206, 147);"></rect><rect x="285.7" y="1" width="28.47" height="368.75" style="fill: rgb(129, 190, 111);"></rect><rect x="314.17" y="1" width="28.47" height="368.75" style="fill: rgb(166, 206, 147);"></rect><rect x="342.64" y="1" width="28.47" height="368.75" style="fill: rgb(129, 190, 111);"></rect><rect x="371.11" y="1" width="28.47" height="368.75" style="fill: rgb(166, 206, 147);"></rect><rect x="399.58" y="1" width="28.47" height="368.75" style="fill: rgb(129, 190, 111);"></rect><rect x="1" y="1" width="427.05" height="368.75" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></rect><line x1="285.7" y1="1" x2="285.7" y2="369.75" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></line><circle cx="285.7" cy="185.38" r="49.62" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></circle><polyline points="1 76.32 90.48 76.32 90.48 294.43 1 294.43" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></polyline><path d="M90.48,145.58a49.63,49.63,0,0,1-.37,79.59" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></path><polyline points="1 135.97 30.82 135.97 30.82 234.78 1 234.78" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></polyline><circle cx="60.65" cy="185.38" r="1.5" style="fill: rgb(255, 255, 255);"></circle></g></g></svg>
            </template>
          </router-link>
        </div>
        <div class="text">
          Three Quarter Pitch Side On
        </div>
      </li>
      <li class="choice">
        <div class="image">
          <router-link :to="{path:'/diagram/' + type + '/6'}">
            <template v-if="type === 'coach'">
              <svg xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 370.75 343.64">
                <title>Asset 33</title>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="TCM">
                    <rect x="1" y="1" width="368.75" height="341.64" style="fill: rgb(255, 255, 255); stroke: rgb(213, 213, 213); stroke-width: 5px;"></rect>
                    <line x1="369.53" y1="285.7" x2="0.78" y2="285.7" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></line>
                    <circle cx="185.43" cy="285.7" r="49.62" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></circle>
                    <polyline points="294.41 1 294.41 90.48 76.31 90.48 76.31 1" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></polyline>
                    <path d="M225.15,90.48a49.62,49.62,0,0,1-79.58-.37" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></path>
                    <polyline points="234.29 1 234.29 30.82 135.48 30.82 135.48 1" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></polyline>
                    <circle cx="185.43" cy="60.65" r="1.5" style="fill: rgb(213, 213, 213);"></circle>
                  </g>
                </g>
              </svg>
            </template>
            <template v-else>
              <svg xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 370.75 343.64"><title><!-- react-text: 349 -->Asset 20<!-- /react-text --></title><g id="Layer_2" data-name="Layer 2"><g id="USSF"><rect x="171.14" y="-168.46" width="28.47" height="368.75" transform="translate(201.29 -169.46) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="-139.99" width="28.47" height="368.75" transform="translate(229.76 -140.99) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="-111.52" width="28.47" height="368.75" transform="translate(258.23 -112.52) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="-83.05" width="28.47" height="368.75" transform="translate(286.7 -84.05) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="-54.58" width="28.47" height="368.75" transform="translate(315.17 -55.58) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="-26.11" width="28.47" height="368.75" transform="translate(343.64 -27.11) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="2.02" width="28.47" height="368.75" transform="translate(371.77 1.02) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="30.49" width="28.47" height="368.75" transform="translate(400.24 29.49) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="58.36" width="28.47" height="368.75" transform="translate(428.11 57.36) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="86.83" width="28.47" height="368.75" transform="translate(456.58 85.83) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="115.56" width="28.47" height="368.75" transform="translate(485.31 114.56) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="144.03" width="28.47" height="368.75" transform="translate(513.78 143.03) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="1" y="1" width="368.75" height="341.64" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></rect><line x1="369.75" y1="285.7" x2="1" y2="285.7" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></line><circle cx="185.38" cy="285.7" r="49.62" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></circle><polyline points="294.43 1 294.43 90.48 76.32 90.48 76.32 1" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></polyline><path d="M225.17,90.48a49.63,49.63,0,0,1-79.59-.37" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></path><polyline points="234.78 1 234.78 30.82 135.97 30.82 135.97 1" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></polyline><circle cx="185.38" cy="60.65" r="1.5" style="fill: rgb(255, 255, 255);"></circle></g></g></svg>
            </template>
          </router-link>
        </div>
        <div class="text">
          Half Pitch
        </div>
      </li>
      <li class="choice">
        <div class="image">
          <router-link :to="{path:'/diagram/' + type + '/7'}">
            <template v-if="type === 'coach'">
              <svg id="TCM" xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 370.75 343.64">
                <title>1-2 Pitch Defensive</title>
                <rect x="0.78" y="1" width="368.75" height="341.64" style="fill: rgb(255, 255, 255); stroke: rgb(213, 213, 213); stroke-width: 5px;"></rect>
                <line x1="1" y1="57.94" x2="369.75" y2="57.94" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></line>
                <circle cx="185.1" cy="57.94" r="49.62" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></circle>
                <polyline points="76.12 342.64 76.12 253.16 294.23 253.16 294.23 342.64" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></polyline>
                <path d="M145.38,253.16a49.63,49.63,0,0,1,79.58.36" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></path>
                <polyline points="136.25 342.64 136.25 312.81 235.05 312.81 235.05 342.64" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></polyline>
                <circle cx="185.1" cy="282.99" r="1.5" style="fill: rgb(213, 213, 213);"></circle>
              </svg>
            </template>
            <template v-else>
              <svg id="USSF" xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 370.75 343.64"><title><!-- react-text: 383 -->1-2 Pitch Defensive<!-- /react-text --></title><rect x="171.14" y="143.35" width="28.47" height="368.75" transform="translate(-142.35 513.1) rotate(-90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="114.88" width="28.47" height="368.75" transform="translate(-113.88 484.63) rotate(-90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="86.41" width="28.47" height="368.75" transform="translate(-85.41 456.16) rotate(-90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="57.94" width="28.47" height="368.75" transform="translate(-56.94 427.69) rotate(-90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="29.47" width="28.47" height="368.75" transform="translate(-28.47 399.22) rotate(-90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="1" width="28.47" height="368.75" transform="translate(0 370.75) rotate(-90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="-27.13" width="28.47" height="368.75" transform="translate(28.13 342.62) rotate(-90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="-55.6" width="28.47" height="368.75" transform="translate(56.6 314.15) rotate(-90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="-83.47" width="28.47" height="368.75" transform="translate(84.47 286.28) rotate(-90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="-111.94" width="28.47" height="368.75" transform="translate(112.94 257.81) rotate(-90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="-140.67" width="28.47" height="368.75" transform="translate(141.67 229.08) rotate(-90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="-169.14" width="28.47" height="368.75" transform="translate(170.14 200.61) rotate(-90)" style="fill: rgb(166, 206, 147);"></rect><rect x="1" y="1" width="368.75" height="341.64" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></rect><line x1="1" y1="57.94" x2="369.75" y2="57.94" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></line><circle cx="185.38" cy="57.94" r="49.62" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></circle><polyline points="76.32 342.64 76.32 253.16 294.43 253.16 294.43 342.64" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></polyline><path d="M145.58,253.16a49.64,49.64,0,0,1,79.59.36" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></path><polyline points="135.97 342.64 135.97 312.81 234.78 312.81 234.78 342.64" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></polyline><circle cx="185.38" cy="282.99" r="1.5" style="fill: rgb(255, 255, 255);"></circle></svg>
            </template>
          </router-link>
        </div>
        <div class="text">
          Half Pitch Defensive
        </div>
      </li>
      <li class="choice">
        <div class="image">
          <router-link :to="{path:'/diagram/' + type + '/8'}">
            <template v-if="type === 'coach'">
              <svg id="TCM" xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 343.64 370.75">
                <title>1-2 Pitch Side On</title>
                <rect x="0.89" y="0.89" width="341.64" height="368.75" style="fill: rgb(255, 255, 255); stroke: rgb(213, 213, 213); stroke-width: 5px;"></rect>
                <line x1="285.59" y1="1.11" x2="285.59" y2="369.86" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></line>
                <circle cx="285.59" cy="185.21" r="49.62" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></circle>
                <polyline points="0.89 76.23 90.37 76.23 90.37 294.33 0.89 294.33" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></polyline>
                <path d="M90.37,145.49A49.62,49.62,0,0,1,90,225.07" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></path>
                <polyline points="0.89 136.35 30.72 136.35 30.72 235.16 0.89 235.16" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></polyline>
                <circle cx="60.54" cy="185.21" r="1.5" style="fill: rgb(213, 213, 213);"></circle>
              </svg>
            </template>
            <template v-else>
              <svg xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 343.64 370.75"><title><!-- react-text: 415 -->Asset 21<!-- /react-text --></title><g id="Layer_2" data-name="Layer 2"><g id="USSF"><rect x="1.68" y="1" width="28.47" height="368.75" style="fill: rgb(129, 190, 111);"></rect><rect x="30.15" y="1" width="28.47" height="368.75" style="fill: rgb(166, 206, 147);"></rect><rect x="58.62" y="1" width="28.47" height="368.75" style="fill: rgb(129, 190, 111);"></rect><rect x="87.09" y="1" width="28.47" height="368.75" style="fill: rgb(166, 206, 147);"></rect><rect x="115.56" y="1" width="28.47" height="368.75" style="fill: rgb(129, 190, 111);"></rect><rect x="144.03" y="1" width="28.47" height="368.75" style="fill: rgb(166, 206, 147);"></rect><rect x="172.16" y="1" width="28.47" height="368.75" style="fill: rgb(129, 190, 111);"></rect><rect x="200.63" y="1" width="28.47" height="368.75" style="fill: rgb(166, 206, 147);"></rect><rect x="228.5" y="1" width="28.47" height="368.75" style="fill: rgb(129, 190, 111);"></rect><rect x="256.97" y="1" width="28.47" height="368.75" style="fill: rgb(166, 206, 147);"></rect><rect x="285.7" y="1" width="28.47" height="368.75" style="fill: rgb(129, 190, 111);"></rect><rect x="314.17" y="1" width="28.47" height="368.75" style="fill: rgb(166, 206, 147);"></rect><rect x="1" y="1" width="341.64" height="368.75" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></rect><line x1="285.7" y1="1" x2="285.7" y2="369.75" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></line><circle cx="285.7" cy="185.38" r="49.62" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></circle><polyline points="1 76.32 90.48 76.32 90.48 294.43 1 294.43" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></polyline><path d="M90.48,145.58a49.63,49.63,0,0,1-.37,79.59" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></path><polyline points="1 135.97 30.82 135.97 30.82 234.78 1 234.78" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></polyline><circle cx="60.65" cy="185.38" r="1.5" style="fill: rgb(255, 255, 255);"></circle></g></g></svg>
            </template>
          </router-link>
        </div>
        <div class="text">
          Half Pitch Side On
        </div>
      </li>

      <li class="choice">
        <div class="image">
          <router-link :to="{path:'/diagram/' + type + '/9'}">
            <template v-if="type === 'coach'">
              <svg xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 370.75 191.8">
                <title>Asset 23</title>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="TCM">
                    <rect x="1" y="1" width="368.75" height="189.8" style="fill: rgb(255, 255, 255); stroke: rgb(213, 213, 213); stroke-width: 3px;"></rect>
                    <line x1="369.48" y1="95.9" x2="0.73" y2="95.9" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 3px;"></line>
                    <circle cx="185.38" cy="95.9" r="49.62" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 3px;"></circle>
                  </g>
                </g>
              </svg>
            </template>
            <template v-else>
              <svg xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 370.75 191.8"><title><!-- react-text: 449 -->Asset 24<!-- /react-text --></title><g id="Layer_2" data-name="Layer 2"><g id="USSF"><rect x="180.81" y="-178.47" width="9.81" height="368.75" transform="translate(191.62 -179.81) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.48" y="-159.33" width="28.47" height="368.75" transform="translate(210.76 -160.67) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.48" y="-130.86" width="28.47" height="368.75" transform="translate(239.23 -132.2) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.48" y="-102.39" width="28.47" height="368.75" transform="translate(267.7 -103.73) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.48" y="-73.92" width="28.47" height="368.75" transform="translate(296.17 -75.26) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.48" y="-45.45" width="28.47" height="368.75" transform="translate(324.64 -46.79) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="180.96" y="1.67" width="9.51" height="368.75" transform="translate(371.76 0.33) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.48" y="-17.32" width="28.47" height="368.75" transform="translate(352.77 -18.66) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><circle cx="185.24" cy="95.82" r="49.62" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 3px;"></circle><rect x="1" y="1" width="368.75" height="189.8" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 3px;"></rect><line x1="369.48" y1="95.9" x2="0.73" y2="95.9" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 3px;"></line><circle cx="185.38" cy="95.9" r="49.62" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 3px;"></circle></g></g></svg>
            </template>
          </router-link>
        </div>
        <div class="text">
          Middle Third
        </div>
      </li>
      <li class="choice">
        <div class="image">
          <router-link :to="{path:'/diagram/' + type + '/10'}">
            <template v-if="type === 'coach'">
              <svg xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 370.75 191.8">
                <title>Asset 27</title>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="TCM">
                    <rect x="1" y="1" width="368.75" height="189.8" style="fill: rgb(255, 255, 255); stroke: rgb(213, 213, 213); stroke-width: 3px;"></rect>
                    <polyline points="76.39 190.8 76.39 101.32 294.5 101.32 294.5 190.8" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 3px;"></polyline>
                    <path d="M145.65,101.32a49.63,49.63,0,0,1,79.59.37" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 3px;"></path>
                    <polyline points="136.52 190.8 136.52 160.97 235.32 160.97 235.32 190.8" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 3px;"></polyline>
                    <circle cx="185.38" cy="131.15" r="1.5" style="fill: rgb(213, 213, 213);"></circle>
                  </g>
                </g>
              </svg>
            </template>
            <template v-else>
              <svg xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 370.75 191.8"><title><!-- react-text: 476 -->Asset 28<!-- /react-text --></title><g id="Layer_2" data-name="Layer 2"><g id="USSF"><rect x="171.14" y="-8.49" width="28.47" height="368.75" transform="translate(9.49 361.26) rotate(-90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="-36.96" width="28.47" height="368.75" transform="translate(37.96 332.79) rotate(-90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="-65.43" width="28.47" height="368.75" transform="translate(66.43 304.32) rotate(-90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="-93.9" width="28.47" height="368.75" transform="translate(94.9 275.85) rotate(-90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="-122.37" width="28.47" height="368.75" transform="translate(123.37 247.38) rotate(-90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="-150.84" width="28.47" height="368.75" transform="translate(151.84 218.91) rotate(-90)" style="fill: rgb(166, 206, 147);"></rect><rect x="176.05" y="-174.05" width="18.64" height="368.75" transform="translate(175.05 195.7) rotate(-90)" style="fill: rgb(129, 190, 111);"></rect><rect x="1" y="1" width="368.75" height="189.8" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 3px;"></rect><polyline points="76.32 190.8 76.32 101.32 294.43 101.32 294.43 190.8" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 3px;"></polyline><path d="M145.58,101.32a49.63,49.63,0,0,1,79.59.37" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 3px;"></path><polyline points="135.97 190.8 135.97 160.97 234.78 160.97 234.78 190.8" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 3px;"></polyline><circle cx="185.38" cy="131.15" r="1.5" style="fill: rgb(255, 255, 255);"></circle></g></g></svg>
            </template>
          </router-link>
        </div>
        <div class="text">
          Defensive Third
        </div>
      </li>
      <li class="choice">
        <div class="image">
          <router-link :to="{path:'/diagram/' + type + '/11'}">
            <template v-if="type === 'coach'">
              <svg xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 370.75 191.8">
                <title><!-- react-text: 362 -->Asset 26<!-- /react-text --></title>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="TCM">
                    <rect x="1" y="1" width="368.75" height="189.8" style="fill: rgb(255, 255, 255); stroke: rgb(213, 213, 213); stroke-width: 3px;"></rect>
                    <polyline points="294.36 1 294.36 90.48 76.25 90.48 76.25 1" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 3px;"></polyline>
                    <path d="M225.1,90.48a49.63,49.63,0,0,1-79.59-.37" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 3px;"></path>
                    <polyline points="234.24 1 234.24 30.82 135.43 30.82 135.43 1" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 3px;"></polyline>
                    <circle cx="185.38" cy="60.65" r="1.5" style="fill: rgb(213, 213, 213);"></circle>
                  </g>
                </g>
              </svg>
            </template>
            <template v-else>
              <svg xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 370.75 191.8"><title><!-- react-text: 503 -->Asset 25<!-- /react-text --></title><g id="Layer_2" data-name="Layer 2"><g id="USSF"><rect x="171.14" y="-168.46" width="28.47" height="368.75" transform="translate(201.29 -169.46) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="-139.99" width="28.47" height="368.75" transform="translate(229.76 -140.99) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="-111.52" width="28.47" height="368.75" transform="translate(258.23 -112.52) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="-83.05" width="28.47" height="368.75" transform="translate(286.7 -84.05) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="-54.58" width="28.47" height="368.75" transform="translate(315.17 -55.58) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="-26.11" width="28.47" height="368.75" transform="translate(343.64 -27.11) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="176.05" y="-2.9" width="18.64" height="368.75" transform="translate(366.85 -3.9) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="1" y="1" width="368.75" height="189.8" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 3px;"></rect><polyline points="294.43 1 294.43 90.48 76.32 90.48 76.32 1" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 3px;"></polyline><path d="M225.17,90.48a49.63,49.63,0,0,1-79.59-.37" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 3px;"></path><polyline points="234.78 1 234.78 30.82 135.97 30.82 135.97 1" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 3px;"></polyline><circle cx="185.38" cy="60.65" r="1.5" style="fill: rgb(255, 255, 255);"></circle></g></g></svg>
            </template>
          </router-link>
        </div>
        <div class="text">
          Attacking Third
        </div>
      </li>
      <li class="choice">
        <div class="image">
          <router-link :to="{path:'/diagram/' + type + '/12'}">
            <template v-if="type === 'coach'">
              <svg xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 500 540.58">
                <title><!-- react-text: 382 -->4 Goal Game<!-- /react-text --></title>
                <rect x="0.11" y="21.5" width="499.89" height="499.89" style="fill: rgb(255, 255, 255); stroke: rgb(213, 213, 213); stroke-width: 5px;"></rect>
                <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1-2"><rect x="91.5" y="9.9" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="94.25" y="7.15" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="97" y="9.9" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="99.75" y="7.15" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="102.5" y="9.9" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="105.25" y="7.15" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="108" y="9.9" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="110.75" y="7.15" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="113.5" y="9.9" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="94.25" y="12.65" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="99.75" y="12.65" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="105.25" y="12.65" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="110.75" y="12.65" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="91.5" y="15.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="97" y="15.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="102.5" y="15.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="108" y="15.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="113.5" y="15.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="91.5" y="4.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="97" y="4.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="102.5" y="4.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="108" y="4.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="113.5" y="4.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><path d="M123.12,19.53h0a2.75,2.75,0,0,1-2.75-2.75V3A2.75,2.75,0,0,0,117.62.28H90.12A2.75,2.75,0,0,0,87.37,3h0V16.78a2.75,2.75,0,0,1-2.75,2.75h0v2.75h38.5Zm-33,0V3h27.5v16.5Z" style="fill: rgb(47, 50, 61);"></path></g></g><g id="Layer_2-2" data-name="Layer 2"><g id="Layer_1-2-2" data-name="Layer 1-2"><rect x="383.38" y="9.9" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="386.13" y="7.15" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="388.88" y="9.9" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="391.63" y="7.15" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="394.38" y="9.9" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="397.13" y="7.15" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="399.88" y="9.9" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="402.63" y="7.15" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="405.38" y="9.9" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="386.13" y="12.65" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="391.63" y="12.65" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="397.13" y="12.65" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="402.63" y="12.65" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="383.38" y="15.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="388.88" y="15.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="394.38" y="15.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="399.88" y="15.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="405.38" y="15.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="383.38" y="4.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="388.88" y="4.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="394.38" y="4.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="399.88" y="4.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="405.38" y="4.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><path d="M415,19.53h0a2.75,2.75,0,0,1-2.75-2.75V3A2.75,2.75,0,0,0,409.5.28H382A2.75,2.75,0,0,0,379.25,3h0V16.78a2.75,2.75,0,0,1-2.75,2.75h0v2.75H415Zm-33,0V3h27.5v16.5Z" style="fill: rgb(47, 50, 61);"></path></g></g><g id="Layer_2-3" data-name="Layer 2"><g id="Layer_1-2-3" data-name="Layer 1-2"><rect x="91.5" y="529.88" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="94.25" y="532.63" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="97" y="529.88" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="99.75" y="532.63" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="102.5" y="529.88" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="105.25" y="532.63" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="108" y="529.88" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="110.75" y="532.63" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="113.5" y="529.88" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="94.25" y="527.13" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="99.75" y="527.13" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="105.25" y="527.13" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="110.75" y="527.13" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="91.5" y="524.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="97" y="524.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="102.5" y="524.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="108" y="524.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="113.5" y="524.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="91.5" y="535.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="97" y="535.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="102.5" y="535.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="108" y="535.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="113.5" y="535.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><path d="M123.12,520.26H84.62V523h0a2.75,2.75,0,0,1,2.75,2.75v13.75h0a2.75,2.75,0,0,0,2.75,2.75h27.5a2.75,2.75,0,0,0,2.75-2.75V525.76a2.75,2.75,0,0,1,2.75-2.75h0Zm-5.5,2.75v16.5H90.12V523Z" style="fill: rgb(47, 50, 61);"></path></g></g><g id="Layer_2-4" data-name="Layer 2"><g id="Layer_1-2-4" data-name="Layer 1-2"><rect x="383.38" y="529.88" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="386.13" y="532.63" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="388.88" y="529.88" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="391.63" y="532.63" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="394.38" y="529.88" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="397.13" y="532.63" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="399.88" y="529.88" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="402.63" y="532.63" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="405.38" y="529.88" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="386.13" y="527.13" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="391.63" y="527.13" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="397.13" y="527.13" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="402.63" y="527.13" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="383.38" y="524.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="388.88" y="524.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="394.38" y="524.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="399.88" y="524.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="405.38" y="524.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="383.38" y="535.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="388.88" y="535.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="394.38" y="535.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="399.88" y="535.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="405.38" y="535.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><path d="M415,520.26H376.5V523h0a2.75,2.75,0,0,1,2.75,2.75v13.75h0a2.75,2.75,0,0,0,2.75,2.75h27.5a2.75,2.75,0,0,0,2.75-2.75V525.76A2.75,2.75,0,0,1,415,523h0ZM409.5,523v16.5H382V523Z" style="fill: rgb(47, 50, 61);"></path></g></g></svg>
            </template>
            <template v-else>
              <svg xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 500 540.58"><title><!-- react-text: 530 -->4 Goal Game<!-- /react-text --></title><rect x="230.7" y="-208.33" width="38.6" height="500" transform="translate(291.67 -208.33) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="230.7" y="-169.72" width="38.6" height="500" transform="translate(330.28 -169.72) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="230.7" y="-131.12" width="38.6" height="500" transform="translate(368.88 -131.12) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="230.7" y="-92.52" width="38.6" height="500" transform="translate(407.48 -92.52) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="230.7" y="-53.92" width="38.6" height="500" transform="translate(446.08 -53.92) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="230.7" y="-15.31" width="38.6" height="500" transform="translate(484.69 -15.31) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="230.7" y="22.83" width="38.6" height="500" transform="translate(522.83 22.83) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="230.7" y="61.43" width="38.6" height="500" transform="translate(561.43 61.43) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="230.7" y="99.22" width="38.6" height="500" transform="translate(599.22 99.22) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="230.7" y="137.83" width="38.6" height="500" transform="translate(637.83 137.83) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="230.7" y="176.78" width="38.6" height="500" transform="translate(676.78 176.78) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="230.7" y="215.39" width="38.6" height="500" transform="translate(715.39 215.39) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="231.62" y="253.07" width="36.76" height="500" transform="translate(753.07 253.07) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect y="21.45" width="500" height="500" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></rect><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1-2"><rect x="92.5" y="9.9" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="95.25" y="7.15" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="98" y="9.9" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="100.75" y="7.15" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="103.5" y="9.9" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="106.25" y="7.15" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="109" y="9.9" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="111.75" y="7.15" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="114.5" y="9.9" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="95.25" y="12.65" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="100.75" y="12.65" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="106.25" y="12.65" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="111.75" y="12.65" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="92.5" y="15.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="98" y="15.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="103.5" y="15.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="109" y="15.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="114.5" y="15.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="92.5" y="4.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="98" y="4.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="103.5" y="4.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="109" y="4.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="114.5" y="4.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><path d="M124.12,19.53h0a2.75,2.75,0,0,1-2.75-2.75V3A2.75,2.75,0,0,0,118.62.28H91.12A2.75,2.75,0,0,0,88.37,3h0V16.78a2.75,2.75,0,0,1-2.75,2.75h0v2.75h38.5Zm-33,0V3h27.5v16.5Z" style="fill: rgb(47, 50, 61);"></path></g></g><g id="Layer_2-2" data-name="Layer 2"><g id="Layer_1-2-2" data-name="Layer 1-2"><rect x="384.38" y="9.9" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="387.13" y="7.15" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="389.88" y="9.9" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="392.63" y="7.15" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="395.38" y="9.9" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="398.13" y="7.15" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="400.88" y="9.9" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="403.63" y="7.15" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="406.38" y="9.9" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="387.13" y="12.65" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="392.63" y="12.65" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="398.13" y="12.65" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="403.63" y="12.65" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="384.38" y="15.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="389.88" y="15.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="395.38" y="15.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="400.88" y="15.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="406.38" y="15.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="384.38" y="4.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="389.88" y="4.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="395.38" y="4.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="400.88" y="4.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="406.38" y="4.4" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><path d="M416,19.53h0a2.75,2.75,0,0,1-2.75-2.75V3A2.75,2.75,0,0,0,410.5.28H383A2.75,2.75,0,0,0,380.25,3h0V16.78a2.75,2.75,0,0,1-2.75,2.75h0v2.75H416Zm-33,0V3h27.5v16.5Z" style="fill: rgb(47, 50, 61);"></path></g></g><g id="Layer_2-3" data-name="Layer 2"><g id="Layer_1-2-3" data-name="Layer 1-2"><rect x="92.5" y="529.88" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="95.25" y="532.63" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="98" y="529.88" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="100.75" y="532.63" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="103.5" y="529.88" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="106.25" y="532.63" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="109" y="529.88" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="111.75" y="532.63" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="114.5" y="529.88" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="95.25" y="527.13" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="100.75" y="527.13" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="106.25" y="527.13" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="111.75" y="527.13" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="92.5" y="524.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="98" y="524.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="103.5" y="524.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="109" y="524.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="114.5" y="524.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="92.5" y="535.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="98" y="535.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="103.5" y="535.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="109" y="535.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="114.5" y="535.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><path d="M124.12,520.26H85.62V523h0a2.75,2.75,0,0,1,2.75,2.75v13.75h0a2.75,2.75,0,0,0,2.75,2.75h27.5a2.75,2.75,0,0,0,2.75-2.75V525.76a2.75,2.75,0,0,1,2.75-2.75h0Zm-5.5,2.75v16.5H91.12V523Z" style="fill: rgb(47, 50, 61);"></path></g></g><g id="Layer_2-4" data-name="Layer 2"><g id="Layer_1-2-4" data-name="Layer 1-2"><rect x="384.38" y="529.88" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="387.13" y="532.63" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="389.88" y="529.88" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="392.63" y="532.63" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="395.38" y="529.88" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="398.13" y="532.63" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="400.88" y="529.88" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="403.63" y="532.63" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="406.38" y="529.88" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="387.13" y="527.13" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="392.63" y="527.13" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="398.13" y="527.13" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="403.63" y="527.13" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="384.38" y="524.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="389.88" y="524.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="395.38" y="524.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="400.88" y="524.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="406.38" y="524.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="384.38" y="535.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="389.88" y="535.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="395.38" y="535.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="400.88" y="535.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><rect x="406.38" y="535.38" width="2.75" height="2.75" rx="1.37" ry="1.37" style="fill: rgb(47, 50, 61);"></rect><path d="M416,520.26H377.5V523h0a2.75,2.75,0,0,1,2.75,2.75v13.75h0a2.75,2.75,0,0,0,2.75,2.75h27.5a2.75,2.75,0,0,0,2.75-2.75V525.76A2.75,2.75,0,0,1,416,523h0ZM410.5,523v16.5H383V523Z" style="fill: rgb(47, 50, 61);"></path></g></g></svg>
            </template>
          </router-link>
        </div>
        <div class="text">
          Four Goal Game
        </div>
      </li>

      <li class="choice">
        <div class="image">
          <router-link :to="{path:'/diagram/' + type + '/13'}">
            <template v-if="type === 'coach'">
              <svg xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 370.75 370.75"><title><!-- react-text: 500 -->Asset 29<!-- /react-text --></title><g id="Layer_2" data-name="Layer 2"><g id="TCM"><rect x="1" y="1" width="368.75" height="368.75" style="fill: rgb(255, 255, 255); stroke: rgb(213, 213, 213); stroke-width: 5px;"></rect><line x1="0.95" y1="43.48" x2="369.7" y2="43.48" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px; stroke-dasharray: 9;"></line><line x1="0.95" y1="327.27" x2="369.7" y2="327.27" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px; stroke-dasharray: 9;"></line></g></g></svg>
            </template>
            <template v-else>
              <svg xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 370.75 370.75"><title><!-- react-text: 661 -->Asset 30<!-- /react-text --></title><g id="Layer_2" data-name="Layer 2"><g id="USSF"><rect x="171.14" y="-168.46" width="28.47" height="368.75" transform="translate(201.29 -169.46) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="-139.99" width="28.47" height="368.75" transform="translate(229.76 -140.99) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="-111.52" width="28.47" height="368.75" transform="translate(258.23 -112.52) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="-83.05" width="28.47" height="368.75" transform="translate(286.7 -84.05) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="-54.58" width="28.47" height="368.75" transform="translate(315.17 -55.58) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="-26.11" width="28.47" height="368.75" transform="translate(343.64 -27.11) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="2.02" width="28.47" height="368.75" transform="translate(371.77 1.02) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="30.49" width="28.47" height="368.75" transform="translate(400.24 29.49) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="58.36" width="28.47" height="368.75" transform="translate(428.11 57.36) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="86.83" width="28.47" height="368.75" transform="translate(456.58 85.83) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="115.56" width="28.47" height="368.75" transform="translate(485.31 114.56) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="144.03" width="28.47" height="368.75" transform="translate(513.78 143.03) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.82" y="171.82" width="27.11" height="368.75" transform="translate(541.57 170.82) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="1" y="1" width="368.75" height="368.75" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></rect><line x1="1" y1="43.48" x2="369.75" y2="43.48" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px; stroke-dasharray: 9;"></line><line x1="1" y1="327.27" x2="369.75" y2="327.27" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px; stroke-dasharray: 9;"></line></g></g></svg>
            </template>
          </router-link>
        </div>
        <div class="text">
          Line Ball
        </div>
      </li>
      <li class="choice">
        <div class="image">
          <router-link :to="{path:'/diagram/' + type + '/14'}">
            <template v-if="type === 'coach'">
              <svg id="TCM" xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 370.75 370.75"><title><!-- react-text: 518 -->Rondo Boxes<!-- /react-text --></title><rect x="1.05" y="1" width="368.75" height="368.75" style="fill: rgb(255, 255, 255); stroke: rgb(213, 213, 213); stroke-width: 5px;"></rect><line x1="185.43" y1="1.34" x2="185.43" y2="369.41" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></line><line x1="369.46" y1="185.38" x2="1.39" y2="185.38" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></line></svg>
            </template>
            <template v-else>
              <svg id="USSF" xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 370.75 370.75"><title><!-- react-text: 692 -->Rondo Boxes<!-- /react-text --></title><rect x="171.14" y="-168.46" width="28.47" height="368.75" transform="translate(201.29 -169.46) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="-139.99" width="28.47" height="368.75" transform="translate(229.76 -140.99) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="-111.52" width="28.47" height="368.75" transform="translate(258.23 -112.52) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="-83.05" width="28.47" height="368.75" transform="translate(286.7 -84.05) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="-54.58" width="28.47" height="368.75" transform="translate(315.17 -55.58) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="-26.11" width="28.47" height="368.75" transform="translate(343.64 -27.11) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="2.02" width="28.47" height="368.75" transform="translate(371.77 1.02) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="30.49" width="28.47" height="368.75" transform="translate(400.24 29.49) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="58.36" width="28.47" height="368.75" transform="translate(428.11 57.36) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="86.83" width="28.47" height="368.75" transform="translate(456.58 85.83) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="115.56" width="28.47" height="368.75" transform="translate(485.31 114.56) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="144.03" width="28.47" height="368.75" transform="translate(513.78 143.03) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.82" y="171.82" width="27.11" height="368.75" transform="translate(541.57 170.82) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="1" y="1" width="368.75" height="368.75" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></rect><line x1="185.38" y1="1.68" x2="185.38" y2="369.75" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></line><line x1="369.41" y1="185.71" x2="1.34" y2="185.71" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></line></svg>
            </template>
          </router-link>
        </div>
        <div class="text">
          Rondo Boxes
        </div>
      </li>
      <li class="choice">
        <div class="image">
          <router-link :to="{path:'/diagram/' + type + '/15'}">
            <template v-if="type === 'coach'">
              <svg xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 370.75 370.75"><title><!-- react-text: 534 -->Asset 32<!-- /react-text --></title><g id="Layer_2" data-name="Layer 2"><g id="TCM"><rect x="1" y="1" width="368.75" height="368.75" style="fill: rgb(255, 255, 255); stroke: rgb(213, 213, 213); stroke-width: 5px;"></rect></g></g></svg>
            </template>
            <template v-else>
              <svg xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 370.75 370.75"><title><!-- react-text: 721 -->Asset 31<!-- /react-text --></title><g id="Layer_2" data-name="Layer 2"><g id="USSF"><rect x="171.14" y="-168.46" width="28.47" height="368.75" transform="translate(201.29 -169.46) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="-139.99" width="28.47" height="368.75" transform="translate(229.76 -140.99) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="-111.52" width="28.47" height="368.75" transform="translate(258.23 -112.52) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="-83.05" width="28.47" height="368.75" transform="translate(286.7 -84.05) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="-54.58" width="28.47" height="368.75" transform="translate(315.17 -55.58) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="-26.11" width="28.47" height="368.75" transform="translate(343.64 -27.11) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="2.02" width="28.47" height="368.75" transform="translate(371.77 1.02) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="30.49" width="28.47" height="368.75" transform="translate(400.24 29.49) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="58.36" width="28.47" height="368.75" transform="translate(428.11 57.36) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="86.83" width="28.47" height="368.75" transform="translate(456.58 85.83) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.14" y="115.56" width="28.47" height="368.75" transform="translate(485.31 114.56) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.14" y="144.03" width="28.47" height="368.75" transform="translate(513.78 143.03) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.82" y="171.82" width="27.11" height="368.75" transform="translate(541.57 170.82) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="1" y="1" width="368.75" height="368.75" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></rect></g></g></svg>
            </template>
          </router-link>
        </div>
        <div class="text">
          Blank Canvas
        </div>
      </li>
      <li class="choice">
        <div class="image">
          <router-link :to="{path:'/diagram/' + type + '/16'}">
            <template v-if="type === 'coach'">
              <svg id="TCM" xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 370.8 191.8">
                <title><!-- react-text: 550 -->Blank Rectangle<!-- /react-text --></title>
                <rect x="1" y="1" width="368.75" height="189.8" style="fill: rgb(255, 255, 255); stroke: rgb(213, 213, 213); stroke-width: 3px;"></rect>
              </svg>
            </template>
            <template v-else>
              <svg id="USSF" xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 370.8 191.8"><title><!-- react-text: 750 -->Blank Rectangle<!-- /react-text --></title><rect x="171.19" y="-8.49" width="28.47" height="368.75" transform="translate(9.54 361.31) rotate(-90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.19" y="-36.96" width="28.47" height="368.75" transform="translate(38.01 332.84) rotate(-90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.19" y="-65.43" width="28.47" height="368.75" transform="translate(66.48 304.37) rotate(-90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.19" y="-93.9" width="28.47" height="368.75" transform="translate(94.95 275.9) rotate(-90)" style="fill: rgb(166, 206, 147);"></rect><rect x="171.19" y="-122.37" width="28.47" height="368.75" transform="translate(123.42 247.43) rotate(-90)" style="fill: rgb(129, 190, 111);"></rect><rect x="171.19" y="-150.84" width="28.47" height="368.75" transform="translate(151.89 218.96) rotate(-90)" style="fill: rgb(166, 206, 147);"></rect><rect x="176.11" y="-174.05" width="18.64" height="368.75" transform="translate(175.11 195.75) rotate(-90)" style="fill: rgb(129, 190, 111);"></rect><rect x="1.05" y="1" width="368.75" height="189.8" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 3px;"></rect></svg>
            </template>
          </router-link>
        </div>
        <div class="text">
          Blank Rectangle
        </div>
      </li>

      <li class="choice">
        <div class="image">
          <router-link :to="{path:'/diagram/' + type + '/17'}">
            <template v-if="type === 'coach'">
              <svg id="TCM" xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 342.77 570.35">
                <title><!-- react-text: 564 -->Futsal Pitch<!-- /react-text --></title>
                <rect x="1.36" y="1.37" width="340.06" height="567.62" style="fill: rgb(255, 255, 255); stroke: rgb(213, 213, 213); stroke-width: 8px;"></rect>
                <circle cx="171.39" cy="83.65" r="2.5" style="fill: rgb(213, 213, 213);"></circle>
                <circle cx="171.39" cy="137.57" r="2.5" style="fill: rgb(213, 213, 213);"></circle>
                <path d="M275.6.73S277,66.88,211.87,82.36a49.58,49.58,0,0,1-11.45,1.29H142.35a49.58,49.58,0,0,1-11.45-1.29C65.76,66.88,67.17.73,67.17.73" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 8px;"></path>
                <circle cx="171.39" cy="486.06" r="2.5" style="fill: rgb(213, 213, 213);"></circle>
                <circle cx="171.39" cy="432.14" r="2.5" style="fill: rgb(213, 213, 213);"></circle>
                <path d="M275.6,569s1.41-66.16-63.73-81.64a49.58,49.58,0,0,0-11.45-1.29H142.35a49.58,49.58,0,0,0-11.45,1.29C65.76,502.83,67.17,569,67.17,569" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 8px;"></path>
                <line x1="341.41" y1="285.18" x2="1.75" y2="285.18" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 8px;"></line>
                <circle cx="171.39" cy="285.18" r="43.61" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 8px;"></circle>
              </svg>
            </template>
            <template v-else>
              <svg id="USSF" xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 342.06 569.62"><title><!-- react-text: 771 -->Futsal Pitch<!-- /react-text --></title><rect x="156.79" y="-154.13" width="28.47" height="338.58" transform="translate(186.18 -155.87) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="156.79" y="-125.66" width="28.47" height="338.58" transform="translate(214.65 -127.4) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="156.79" y="-97.2" width="28.47" height="338.58" transform="translate(243.12 -98.93) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="156.79" y="-68.73" width="28.47" height="338.58" transform="translate(271.59 -70.46) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="156.79" y="-40.26" width="28.47" height="338.58" transform="translate(300.06 -41.99) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="156.79" y="-11.79" width="28.47" height="338.58" transform="translate(328.53 -13.52) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="156.79" y="16.34" width="28.47" height="338.58" transform="translate(356.66 14.61) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="156.79" y="44.81" width="28.47" height="338.58" transform="translate(385.13 43.08) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="156.79" y="72.69" width="28.47" height="338.58" transform="translate(413 70.95) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="156.79" y="101.15" width="28.47" height="338.58" transform="translate(441.47 99.42) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="156.79" y="129.88" width="28.47" height="338.58" transform="translate(470.2 128.15) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="156.79" y="158.35" width="28.47" height="338.58" transform="translate(498.67 156.62) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="156.79" y="186.82" width="28.47" height="338.58" transform="translate(527.14 185.09) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="156.79" y="215.29" width="28.47" height="338.58" transform="translate(555.61 213.56) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="156.79" y="243.76" width="28.47" height="338.58" transform="translate(584.08 242.03) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="156.79" y="272.23" width="28.47" height="338.58" transform="translate(612.55 270.5) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="156.79" y="300.36" width="28.47" height="338.58" transform="translate(640.68 298.63) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="156.79" y="328.83" width="28.47" height="338.58" transform="translate(669.15 327.1) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="156.79" y="356.7" width="28.47" height="338.58" transform="translate(697.02 354.97) rotate(90)" style="fill: rgb(129, 190, 111);"></rect><rect x="156.79" y="385.17" width="28.47" height="338.58" transform="translate(725.49 383.44) rotate(90)" style="fill: rgb(166, 206, 147);"></rect><rect x="0.26" y="0.58" width="340.06" height="567.62" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 8px;"></rect><circle cx="170.29" cy="82.86" r="2.5" style="fill: rgb(255, 255, 255);"></circle><circle cx="170.29" cy="136.78" r="2.5" style="fill: rgb(255, 255, 255);"></circle><path d="M274.51-.06s1.41,66.16-63.73,81.63a49.61,49.61,0,0,1-11.46,1.29H141.26a49.61,49.61,0,0,1-11.46-1.29C64.66,66.1,66.07-.06,66.07-.06" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 8px;"></path><circle cx="170.29" cy="485.27" r="2.5" style="fill: rgb(255, 255, 255);"></circle><circle cx="170.29" cy="431.36" r="2.5" style="fill: rgb(255, 255, 255);"></circle><path d="M274.51,568.2s1.41-66.16-63.73-81.63a49.62,49.62,0,0,0-11.46-1.3H141.26a49.62,49.62,0,0,0-11.46,1.3C64.66,502,66.07,568.2,66.07,568.2" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 8px;"></path><line x1="340.32" y1="284.39" x2="0.65" y2="284.39" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></line><circle cx="170.29" cy="284.39" r="43.61" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></circle></svg>
            </template>
          </router-link>
        </div>
        <div class="text">
          Futsal Pitch
        </div>
      </li>
      <li class="choice">
        <div class="image">
          <router-link :to="{path:'/diagram/' + type + '/18'}">
            <template v-if="type === 'coach'">
              <svg id="TCM" xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 569.62 342.06"><title><!-- react-text: 586 -->Futsal Pitch Side On<!-- /react-text --></title><rect x="113.92" y="-112.9" width="340.06" height="567.62" transform="translate(454.86 -113.04) rotate(90)" style="fill: rgb(255, 255, 255); stroke: rgb(213, 213, 213); stroke-width: 5px;"></rect><circle cx="485.48" cy="170.91" r="2.5" style="fill: rgb(213, 213, 213);"></circle><circle cx="431.56" cy="170.91" r="2.5" style="fill: rgb(213, 213, 213);"></circle><path d="M568.4,275.12s-66.16,1.41-81.63-63.73a49.58,49.58,0,0,1-1.29-11.45V141.87a49.58,49.58,0,0,1,1.29-11.45c15.47-65.14,81.63-63.73,81.63-63.73" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></path><circle cx="83.07" cy="170.91" r="2.5" style="fill: rgb(213, 213, 213);"></circle><circle cx="136.98" cy="170.91" r="2.5" style="fill: rgb(213, 213, 213);"></circle><path d="M.14,275.12s66.16,1.41,81.63-63.73a49.59,49.59,0,0,0,1.3-11.45V141.87a49.59,49.59,0,0,0-1.3-11.45C66.3,65.28.14,66.69.14,66.69" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></path><line x1="283.95" y1="340.93" x2="283.95" y2="1.27" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></line><circle cx="283.95" cy="170.91" r="43.61" style="fill: none; stroke: rgb(213, 213, 213); stroke-width: 5px;"></circle></svg>
            </template>
            <template v-else>
              <svg id="USSF" xmlns="http://www.w3.org/2000/svg" width="308" height="173" viewBox="0 0 569.62 342.06"><title><!-- react-text: 813 -->Futsal Pitch Side On<!-- /react-text --></title><rect x="539.37" y="1.62" width="28.47" height="338.58" transform="translate(1107.21 341.81) rotate(180)" style="fill: rgb(129, 190, 111);"></rect><rect x="510.9" y="1.62" width="28.47" height="338.58" transform="translate(1050.27 341.81) rotate(180)" style="fill: rgb(166, 206, 147);"></rect><rect x="482.43" y="1.62" width="28.47" height="338.58" transform="translate(993.33 341.81) rotate(180)" style="fill: rgb(129, 190, 111);"></rect><rect x="453.96" y="1.62" width="28.47" height="338.58" transform="translate(936.39 341.81) rotate(180)" style="fill: rgb(166, 206, 147);"></rect><rect x="425.49" y="1.62" width="28.47" height="338.58" transform="translate(879.45 341.81) rotate(180)" style="fill: rgb(129, 190, 111);"></rect><rect x="397.02" y="1.62" width="28.47" height="338.58" transform="translate(822.51 341.81) rotate(180)" style="fill: rgb(166, 206, 147);"></rect><rect x="368.89" y="1.62" width="28.47" height="338.58" transform="translate(766.25 341.81) rotate(180)" style="fill: rgb(129, 190, 111);"></rect><rect x="340.42" y="1.62" width="28.47" height="338.58" transform="translate(709.31 341.81) rotate(180)" style="fill: rgb(166, 206, 147);"></rect><rect x="312.55" y="1.62" width="28.47" height="338.58" transform="translate(653.57 341.81) rotate(180)" style="fill: rgb(129, 190, 111);"></rect><rect x="284.08" y="1.62" width="28.47" height="338.58" transform="translate(596.63 341.81) rotate(180)" style="fill: rgb(166, 206, 147);"></rect><rect x="255.35" y="1.62" width="28.47" height="338.58" transform="translate(539.17 341.81) rotate(180)" style="fill: rgb(129, 190, 111);"></rect><rect x="226.88" y="1.62" width="28.47" height="338.58" transform="translate(482.23 341.81) rotate(180)" style="fill: rgb(166, 206, 147);"></rect><rect x="198.41" y="1.62" width="28.47" height="338.58" transform="translate(425.29 341.81) rotate(180)" style="fill: rgb(129, 190, 111);"></rect><rect x="169.94" y="1.62" width="28.47" height="338.58" transform="translate(368.35 341.81) rotate(180)" style="fill: rgb(166, 206, 147);"></rect><rect x="141.47" y="1.62" width="28.47" height="338.58" transform="translate(311.41 341.81) rotate(180)" style="fill: rgb(129, 190, 111);"></rect><rect x="113" y="1.62" width="28.47" height="338.58" transform="translate(254.47 341.81) rotate(180)" style="fill: rgb(166, 206, 147);"></rect><rect x="84.87" y="1.62" width="28.47" height="338.58" transform="translate(198.21 341.81) rotate(180)" style="fill: rgb(129, 190, 111);"></rect><rect x="56.4" y="1.62" width="28.47" height="338.58" transform="translate(141.27 341.81) rotate(180)" style="fill: rgb(166, 206, 147);"></rect><rect x="28.53" y="1.62" width="28.47" height="338.58" transform="translate(85.53 341.81) rotate(180)" style="fill: rgb(129, 190, 111);"></rect><rect x="0.06" y="1.62" width="28.47" height="338.58" transform="translate(28.59 341.81) rotate(180)" style="fill: rgb(166, 206, 147);"></rect><rect x="114.34" y="-113.64" width="340.06" height="567.62" transform="translate(454.54 -114.2) rotate(90)" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></rect><circle cx="485.9" cy="170.17" r="2.5" style="fill: rgb(255, 255, 255);"></circle><circle cx="431.98" cy="170.17" r="2.5" style="fill: rgb(255, 255, 255);"></circle><path d="M568.82,274.39s-66.16,1.41-81.63-63.73a49.67,49.67,0,0,1-1.29-11.46V141.14a49.61,49.61,0,0,1,1.29-11.46C502.66,64.54,568.82,66,568.82,66" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></path><circle cx="83.49" cy="170.17" r="2.5" style="fill: rgb(255, 255, 255);"></circle><circle cx="137.4" cy="170.17" r="2.5" style="fill: rgb(255, 255, 255);"></circle><path d="M.56,274.39s66.16,1.41,81.63-63.73a49.68,49.68,0,0,0,1.3-11.46V141.14a49.62,49.62,0,0,0-1.3-11.46C66.72,64.54.56,66,.56,66" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></path><line x1="284.37" y1="340.2" x2="284.37" y2="0.53" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></line><circle cx="284.37" cy="170.17" r="43.61" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5px;"></circle></svg>
            </template>
          </router-link>
        </div>
        <div class="text">
          Futsal Pitch Side On
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'pitch',
    components:{
    },
    data () {
      return {
      }
    },
    computed:{
      type(){
        return this.$route.params.type;
      }
    },
    mounted(){
     let imageDivs = document.getElementsByClassName('image');
     if(this.type === 'coach'){
       for(let imageDiv of imageDivs){
         imageDiv.style.backgroundImage = 'url(/static/img/pitchBg1.png)';
       }
     }else if(this.type === 'standard'){
       for(let imageDiv of imageDivs){
         imageDiv.style.backgroundImage = 'url(/static/img/pitchBg2.png)';
       }
     }
    }
  }
</script>

<style lang="scss" scoped>
  html,body{
    width: 100%;
    height: 100%;
  }
  .pitch{
    width: 100%;
    height: 100%;
    background-color: rgb(67,69,79);
    .header{
      width: 100%;
    }
    .pick{
      width: 100%;
      height: 40px;
      text-align: center;
      color: white;
      font-size: 25px;
      font-weight: 500;
      margin: 50px auto 30px auto;
    }
    .choices{
      width: 100%;
      display: flex;
      flex-flow: wrap;
      list-style: none;
      background-color: rgb(67,69,79);
      .choice{
        width: 21.5%;
        text-align: center;
        margin: 0 15px 30px 15px;
        border-radius: 4px;
        transition: all 0.2s;
        background-color: white;
        &:hover{
          transform: scale(1.03);
        }
        .image{
          padding: 10px 0;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          border-bottom: 1px solid rgb(225, 225, 225);
          background-repeat: repeat;
        }
        .text{
          height: 60px;
          font-weight: 500;
          text-align: center;
          line-height: 60px;
        }
      }
      .coaching{
        margin-right: 20px;
      }
    }
  }

</style>

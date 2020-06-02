<template>
    <div class="fixed flex h-full w-full justify-center items-center bg-gray-900" style="z-index: 150">
        <div class="relative flex justify-center items-center text-blue-800 font-bold" style="font-size: 40px; top: 22px">J</div>
        <div class="hexagon"></div>
    </div>
</template>

<style scoped>
    .hexagon {
        position: absolute;
        width: 80px; 
        height: 46.19px;
        animation: roll 3s infinite linear;
        margin: 23.09px 0;
        border-left: solid 5px #2c5282;
        border-right: solid 5px #2c5282;
    }

    @keyframes roll {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .hexagon:before,
    .hexagon:after {
        content: "";
        position: absolute;
        z-index: 1;
        width: 56.57px;
        height: 56.57px;
        -webkit-transform: scaleY(0.5774) rotate(-45deg);
        -ms-transform: scaleY(0.5774) rotate(-45deg);
        transform: scaleY(0.5774) rotate(-45deg);
        background-color: inherit;
        left: 6.7157px;
    }

    .hexagon:before {
        top: -28.2843px;
        border-top: solid 7.0711px #2c5282;
        border-right: solid 7.0711px #2c5282;
    }

    .hexagon:after {
        bottom: -28.2843px;
        border-bottom: solid 7.0711px #2c5282;
        border-left: solid 7.0711px #2c5282;
    }
</style>
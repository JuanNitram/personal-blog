<template>
    <div id="stack" class="mx-auto px-32 pb-12 pt-16 text-gray-400 hidden lg:block">
        <div class="w-full px-5 pb-3">
            <Title :text="$t('Development Process')"/>
        </div>
        <div class="w-full flex justify-center pt-10 relative">
            <div id="requeriments" class="absolute flex justify-center border-4 border- border-blue-800 text-gray-100 z-30 px-4 py-2 rounded-lg bg-gray-900 cursor-pointer hover:bg-blue-800 text-gray-100 text-sm">Requeriments</div>
            <div id="prototyping" class="absolute flex justify-center border-4 border-blue-800 text-gray-100 z-30 px-4 py-2 rounded-lg bg-gray-900 cursor-pointer hover:bg-blue-800 text-gray-100 text-sm">Prototyping</div>
            <div id="architecture" class="absolute flex justify-center border-4 border-blue-800 text-gray-100 z-30 px-4 py-2 rounded-lg bg-gray-900 cursor-pointer hover:bg-blue-800 text-gray-100 text-sm">Architecture & Database Design</div>
            <div id="development" class="absolute flex justify-center border-4 border-blue-800 text-gray-100 z-30 px-4 py-2 rounded-lg bg-gray-900 cursor-pointer hover:bg-blue-800 text-gray-100 text-sm">Development</div>
            <div id="live" class="absolute flex justify-center border-4 border-blue-800 text-gray-100 z-30 px-4 py-2 rounded-lg bg-gray-900 cursor-pointer hover:bg-blue-800 text-gray-100 text-sm">Live Server Deployment</div>
            <div id="testing" class="absolute flex justify-center border-4 border-blue-800 text-gray-100 z-30 px-4 py-2 rounded-lg bg-gray-900 cursor-pointer hover:bg-blue-800 text-gray-100 text-sm">Testing & QA</div>
            <div class="hexagon">
                <span class="justify-center items-center flex-col p-10 -mt-2" style="display: flex">
                    <h1 class="text-3xl lg:text-4xl text-center lg:text-left text-gray-100">Lorem ipsum</h1>
                    <p class="text-sm lg:text-md text-center text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aspernatur, totam eligendi placeat et sapiente, quas harum voluptatum odit voluptatibus dolorum id reiciendis, aliquid nesciunt itaque ipsum voluptatem voluptate nulla?</p>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    import Title from '../../shared/Title';

    export default {
        components: {
            Title
        }
    }
</script>

<style scoped>
.hex-content {
    display: flex;
}

#requeriments {
    min-width: 250px;
    top: 10px;
}

#testing {
    top: 450px;
    left: 300px;
    min-width: 250px;
}

#live {
    top: 160px;
    left: 300px;
    min-width: 250px;
}

#development {
    top: 600px;
    min-width: 250px;
}

#architecture {
    top: 450px;
    right: 300px;
    min-width: 250px;
}

#prototyping {
    top: 160px;
    right: 300px;
    min-width: 250px;
}

.hexagon {
  position: relative;
  width: 500px; 
  height: 288.68px;
  background-color: #222222;
  margin: 144.34px 0;
  box-shadow: 0 0 20px rgba(0,0,0,0.6);
  border-left: solid 8px #2c5282;
  border-right: solid 8px #2c5282;
}

.hexagon:before, .hexagon:after {
  content: "";
  position: absolute;
  z-index: 1;
  width: 353.55px;
  height: 353.55px;
  -webkit-transform: scaleY(0.5774) rotate(-45deg);
  -ms-transform: scaleY(0.5774) rotate(-45deg);
  transform: scaleY(0.5774) rotate(-45deg);
  background-color: inherit;
  left: 65.2233px;
  box-shadow: 0 0 20px rgba(0,0,0,0.6);
}

.hexagon:before {
  top: -176.7767px;
  border-top: solid 11.3137px #2c5282;
  border-right: solid 11.3137px #2c5282;
}

.hexagon:after {
  bottom: -176.7767px;
  border-bottom: solid 11.3137px #2c5282;
  border-left: solid 11.3137px #2c5282;
}

.hexagon span {
  display: block;
  position: absolute;
  top:4.618802153517006px;
  left: 0;
  width:484px;
  height:279.4375px;
  z-index: 2;
  background: inherit;
}
</style>
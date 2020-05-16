<template>
    <div class=w-full>
        <div class="pb-6">
            <Title text="Personal Skills"/>
        </div>

        <div class="block lg:flex pb-0 lg:pb-6 px-0 lg:px-5">
            <div class="w-full lg:w-1/2 block pb-2 lg:pb-0 mr-0 lg:mr-8">
                <StatusBar text="Problem Solving" width="100%"/>
            </div>
            <div class="w-full lg:w-1/2 block pb-2 lg:pb-0 ml-0 lg:ml-8">
                <StatusBar text="Team work" width="100%"/>
            </div>
        </div>

        <div class="block lg:flex pb-10 px-0 lg:px-5">
            <div class="w-full lg:w-1/2 block pb-2 lg:pb-0 mr-0 lg:mr-8">
                <StatusBar text="Adaptability" width="85%"/>
            </div>
            <div class="w-full lg:w-1/2 block ml-0 lg:ml-8">
                <StatusBar text="Organizational Skills" width="95%"/>
            </div>
        </div>

        <div class="pb-6">
            <Title text="Coding Skills"/>
        </div>

        <div class="block lg:flex pb-0 lg:pb-6 px-0 lg:px-5">
            <div class="w-full lg:w-1/2 block pb-2 lg:pb-0 mr-0 lg:mr-8">
                <StatusBar text="PHP" width="90%"/>
            </div>
            <div class="w-full lg:w-1/2 block pb-2 lg:pb-0 ml-0 lg:ml-8">
                <StatusBar text="Javascript" width="90%"/>
            </div>
        </div>

        <div class="block lg:flex pb-0 lg:pb-6 px-0 lg:px-5">
            <div class="w-full lg:w-1/2 block pb-2 lg:pb-0 mr-0 lg:mr-8">
                <StatusBar text="HTML" width="80%"/>
            </div>
            <div class="w-full lg:w-1/2 block pb-2 lg:pb-0 ml-0 lg:ml-8">
                <StatusBar text="VueJs" width="90%"/>
            </div>
        </div>

        <div class="block lg:flex pb-0 lg:pb-6 px-0 lg:px-5">
            <div class="w-full lg:w-1/2 pb-2 lg:pb-0 block mr-8">
                <StatusBar text="MySql" width="75%"/>
            </div>
            <div class="w-full lg:w-1/2 block pb-2 lg:pb-0 ml-0 lg:ml-8">
                <StatusBar text="MongoDb" width="65%"/>
            </div>
        </div>

        <div class="block lg:flex pb-0 lg:pb-6 px-0 lg:px-5">
            <div class="w-full lg:w-1/2 pb-2 lg:pb-0 block mr-8">
                <StatusBar text="Bootstrap 4" width="80%"/>
            </div>
            <div class="w-full lg:w-1/2 block pb-2 lg:pb-0 ml-0 lg:ml-8">
                <StatusBar text="ReactJs" width="85%"/>
            </div>
        </div>

        <div class="block lg:flex pb-10 px-0 lg:px-5">
            <div class="w-full lg:w-1/2 block pb-2 lg:pb-0 mr-0 lg:mr-8">
                <StatusBar text="Tailwind CSS" width="88%"/>
            </div>
            <div class="w-full lg:w-1/2 block ml-0 lg:ml-8">
                <StatusBar text="NodeJs" width="83%"/>
            </div>
        </div>

        <div class="pb-6">
            <Title text="Other Skills"/>
        </div>

        <div class="block lg:flex pb-0 lg:pb-6 px-0 lg:px-5">
            <div class="w-full lg:w-1/2 block pb-2 lg:pb-0 mr-0 lg:mr-8">
                <StatusBar text="AWS" width="65%"/>
            </div>
            <div class="w-full lg:w-1/2 block pb-2 lg:pb-0 ml-0 lg:ml-8">
                <StatusBar text="Google Cloud" width="70%"/>
            </div>
        </div>

        <div class="block lg:flex pb-0 lg:pb-6 px-0 lg:px-5">
            <div class="w-full lg:w-1/2 block pb-2 lg:pb-0 mr-0 lg:mr-8">
                <StatusBar text="Linux Servers Management" width="75%"/>
            </div>
            <div class="w-full lg:w-1/2 block pb-2 lg:pb-0 ml-0 lg:ml-8">
                <StatusBar text="Docker" width="65%"/>
            </div>
        </div>

        <div class="block lg:flex pb-6 px-0 lg:px-5">
            <div class="w-full lg:w-1/2 block pb-2 lg:pb-0 mr-0 lg:mr-8">
                <StatusBar text="Agile/Scrum Methodology" width="94%"/>
            </div>
            <div class="w-full lg:w-1/2 block ml-0 lg:ml-8">
                <StatusBar text="API Design" width="90%"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Title from '../../shared/Title';
    import StatusBar from '../../shared/StatusBar';

    export default {
        components: {
            Title,
            StatusBar
        }
    }
</script>
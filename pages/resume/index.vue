<template>
    <div id="resume" class="py-12">
        <Breadcrumb :text="$t('resume')" :secondary-text="$t('yearsExperience')" />

        <div class="block lg:flex px-6 lg:px-24 xl:px-40 py-12">
            <div class="w-full lg:w-1/2 mr-0 lg:mr-4 mb-10 lg:mb-0">
                <Education/>
            </div>
            <div class="w-full lg:w-1/2 ml-0 lg:ml-4">
                <Experience/>
            </div>
        </div>

        <!-- <div class="block lg:flex px-6 lg:px-24 xl:px-40 pb-20">
            <Certificates/>
        </div> -->

        <!-- <div class="block lg:flex px-6 lg:px-24 xl:px-40 pb-20">
            <Skills/>
        </div> -->
    </div>
</template>

<script>
    import Breadcrumb from '../../components/shared/Breadcrumb';
    import Education from '../../components/pages/resume/Education';
    import Experience from '../../components/pages/resume/Experience';
    import Certificates from '../../components/pages/resume/Certificates';
    import Skills from '../../components/pages/resume/Skills';

    export default {
        transition: 'page',

        components: {
            Breadcrumb,
            Education,
            Experience,
            Certificates,
            Skills
        },

        head() {
            return {
                title: 'Juan Vargas | Resume'
            }
        }
    }
</script>
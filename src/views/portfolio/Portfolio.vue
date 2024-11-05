<template>
    <page-desktop-only id="portfolio-page">
        <div id="portfolio-header" :style="loadGradient">
            <h1>Michael Sinclair</h1>
            <div id="bullets">
                <img class="bullet" src="@/assets/images/bullet_white.png" alt="Native Software" />
                <h2 @click="() => { if(!this.disk.freeroamImg.uploaded) this.clickDisk(4) }">Native Software</h2>

                <img class="bullet" src="@/assets/images/bullet_white.png" alt="Web Apps" />
                <h2 @click="() => { if(!this.disk.freeroamImg.uploaded) this.clickDisk(2) }">Web Apps</h2>

                <img class="bullet" src="@/assets/images/bullet_white.png" alt="Web Apps" />
                <h2 @click="() => { if(!this.disk.freeroamImg.uploaded){ this.clickDisk(1); this.disk.sublevel = 1; }}">Past Projects</h2>

                <img class="bullet" src="@/assets/images/bullet_white.png" alt="Games" />
                <h2 @click="() => { if(!this.disk.freeroamImg.uploaded) this.clickDisk(4) }">Games</h2>

                <img class="bullet" src="@/assets/images/bullet_white.png" alt="Graphics" />
                <h2 @click="() => { if(!this.disk.freeroamImg.uploaded) this.clickDisk(3) }">Graphics</h2>
            </div>
        </div>
        <div id="portfolio">
            <media-component id="sm-container-vertical">
                <a href="https://www.facebook.com/profile.php?id=100093448504925" target="_blank" :style="loadFbIcon">
                    <img src="@/assets/images/fb_blue.png" alt="Our Facebook" />
                </a>
                <a href="https://www.instagram.com/intivatechnologies/" target="_blank" :style="loadIgIcon">
                    <img src="@/assets/images/ig_pink.png" alt="Our Instagram" />
                </a>
                <a href="https://www.linkedin.com/in/michael-sinclair-bb2b86185/" target="_blank" :style="loadLnIcon">
                    <img src="@/assets/images/ln_blue.png" alt="Our LinkedIn" />
                </a>
                <a href="https://twitter.com/IntivaTech" target="_blank" :style="loadTwIcon">
                    <img src="@/assets/images/tw_blue.png" alt="Our Twitter" />
                </a>
            </media-component>
            <div class="side-by-side" id="bio">
                <div class="side-by-side-element side-by-side-left">
                    <h1>Graphics Design</h1>
                    <p>
                        I started my business designing logos and graphic solutions. Starting up Intiva Technolgies
                        in January 2021, my first year was where I met remarkable milestones including what I
                        consider to be my best logo made for a client: Clearbrook Rental Properties. I also
                        designed signs under this company of which five stand tall in my local community. Although
                        I don&#39;t take as much practice for my logos as I do software, my fascination for graphic
                        design has assisted me in these three areas:
                    </p>
                    <ol>
                        <li>
                            User experience
                        </li>
                        <p>
                            The ability to create icons, pixel effects, and animations have been vital to my history
                            of both graphic design and software development. The ability to excel in these areas proves
                            a vital requirement for providing an immersive experience. Traditionally, a website or app
                            should follow the colour scheme and aesthetic of its logo, so I&#39;ve always worked hard
                            to make one that counts!
                        </p>

                        <li>
                            Brand Identity
                        </li>
                        <p>
                            In this economy, making a unique logo stand out among the competition can be tough. From my
                            experience, you need two things to gain significant market attraction: a logo and a website (OR
                            a social media account). Designing graphics from a young age gave me the tools necessary to
                            build a valuable brand identity via my website and logo (check it out at
                            <a href="https://intivatechnologies.ca" target="_blank" class="hyperlink">intivatechnologies.ca</a>)
                        </p>

                        <li>
                            Creativity Conditioning
                        </li>
                        <p>
                            Similar to the user experience note, my ability to design logos and graphic art has complemented
                            my websites, web apps, and native apps, and vice versa. Among other healthy choices such as
                            writing down my ideas, I've come up with a vast number of office app ideas I hope to
                            implement for years to come through my business, Intiva Technologies.
                        </p>
                    </ol>
                </div>
                <div class="side-by-side-element side-by-side-right">
                    <div id="left-bio">
                        <h1>Software Development</h1>
                        <p>
                            My interest in websites began long before my business. I began my programming
                            journey in 2013 at the library to teach myself HTML/CSS, Java, and C.
                            Although my first year proved to be a mere rundown of the topics, it was
                            not long before I became fascinated with developing interfaces, games, and
                            advanced software.
                        </p>
                        <p>
                            I've also aquired a mature fascination for Apple and like-minded companies because
                            they made complex tools intuitive to the human mind. This fascination has led
                            to my passion for developing intuitive interfaces. After all, an interface is what makes
                            machinery understandable to the mind. Thus began Intiva Technologies in early 2021, and
                            we&#39;ve been making remarkable interfaces ever since.
                        </p>
                    </div>
                    <div id="computer">
                        <div id="monitor">
                            <div id="monitor-backlit">
                                <div id="monitor-page-0" class="monitor-page" v-if="!disk.freeroamImg.uploaded">
                                    <id-anim-switch target="page-options" ref="page-options">
                                        <div class="page-option-row">
                                            <img src="@/assets/images/floppy_skills.png" alt="Skills &#amp; Opportunities"
                                                :style="loadFirstDisk" @click="() => clickDisk(0)" id="disk-0" />
                                            <img src="@/assets/images/floppy_private.png" alt="Sites under development"
                                                :style="loadSecondDisk" @click="() => clickDisk(1)" id="disk-1" />
                                        </div>
                                        <div class="page-option-row">
                                            <img src="@/assets/images/floppy_public.png" alt="Public sites"
                                                :style="loadThirdDisk" @click="() => clickDisk(2)" id="disk-2" />
                                            <img src="@/assets/images/floppy_logos.png" alt="Logos &#amp; Designs"
                                                :style="loadFourthDisk" @click="() => clickDisk(3)" id="disk-3" />
                                        </div>
                                        <div class="page-option-row">
                                            <!--
                                            <img src="@/assets/images/floppy_apps.png" alt="Apps &#amp; Prototypes"
                                                :style="loadFifthDisk" @click="() => clickDisk(4)" id="disk-4" />
                                        -->
                                            <img src="@/assets/images/floppy_hobbies.png" alt="University &#amp; Hobbies"
                                                :style="loadSixthDisk" @click="() => clickDisk(5)" id="disk-5" />
                                        </div>
                                    </id-anim-switch>
                                </div>

                                <div v-else-if="disk.freeroamImg.selected == 0" id="monitor-page-1" class="monitor-page">
                                    <div v-if="disk.sublevel == 0">
                                        <navigation-bar right-assignment="Opportunities"
                                            :right-callback="() => this.disk.sublevel = 1" @exit-clicked="eject" />

                                        <table class="monitor-table">
                                            <tr>
                                                <td>*HTML/CSS</td>
                                                <td>10 years</td>
                                            </tr>
                                            <tr>
                                                <td>*JavaScript</td>
                                                <td>9 years</td>
                                            </tr>
                                            <tr>
                                                <td>*Java</td>
                                                <td>7 years</td>
                                            </tr>
                                            <tr>
                                                <td>C++</td>
                                                <td>3 years</td>
                                            </tr>
                                            <tr>
                                                <td>Vue JS</td>
                                                <td>1 year</td>
                                            </tr>
                                        </table>

                                        <div class="monitor-caption">Fields marked with * are languages I began to
                                            study in my first year.</div>
                                    </div>
                                    <div v-else>
                                        <navigation-bar right-assignment="Skills"
                                            :right-callback="() => this.disk.sublevel = 0" @exit-clicked="eject" />

                                        <div class="monitor-caption">
                                            <br /><br />
                                            <span>* Variety in backend frameworks &#38; libraries</span><br /><br />
                                            <span>* Wordpress or site builders</span><br /><br />
                                            <span>* Self employed</span>
                                        </div>
                                    </div>
                                </div>

                                <div v-else-if="disk.freeroamImg.selected == 1" id="monitor-page-2" class="monitor-page">
                                    <div v-if="disk.sublevel == 0">
                                        <navigation-bar right-assignment="Concept/Retired"
                                            :right-callback="() => this.disk.sublevel = 1" @exit-clicked="eject" />

                                        <table class="monitor-table">
                                            <tr>
                                                <td>Website</td>
                                                <td>Year of release</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://youtu.be/BfRH1o154FQ" target="_blank">
                                                        *Rustic &#38;<br />Redefined
                                                    </a>
                                                </td>
                                                <td>2023</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://youtu.be/NdshWQRzBaE" target="_blank">
                                                        *Martial<br />Arts Site
                                                    </a>
                                                </td>
                                                <td>2023</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://intivatechlabs.com" target="_blank">
                                                        Intiva<br />Tech Labs
                                                    </a>
                                                </td>
                                                <td>2024</td>
                                            </tr>
                                        </table>
    
                                        <div class="monitor-caption">Fields marked with * are websites under works
                                            for a client.</div>
                                    </div>
                                    <div v-else>
                                        <navigation-bar right-assignment="Under works"
                                            :right-callback="() => this.disk.sublevel = 0" @exit-clicked="eject" />

                                        <div class="monitor-caption">
                                            <br /><br />
                                            <a href="https://mikesinclair66.github.io/sites/it_temp/index.html" target="_blank">
                                                Intiva Technologies (Previous Temp Site)
                                            </a><br /><br />
                                            <a href="https://mikesinclair66.github.io/sites/ppc/index.html" target="_blank">
                                                People&#39;s Party of Canada - Fraser Valley EDA
                                            </a><br /><br />
                                            <a href="https://mikesinclair66.github.io/sites/charity/index.html" target="_blank">
                                                Charity Site (Freelance Bid)
                                            </a><br /><br />
                                            <a href="https://mikesinclair66.github.io/sites/la/index.html" target="_blank">
                                                Lothian Aviation Inc.
                                            </a><br /><br />
                                            <a href="https://mikesinclair66.github.io/sites/amk2/index.html" target="_blank">
                                                AMK
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div v-else-if="disk.freeroamImg.selected == 2" id="monitor-page-3" class="monitor-page">
                                    <navigation-bar @exit-clicked="eject" />

                                    <div class="monitor-caption">
                                        <br /><br />
                                        <a href="https://youtu.be/BfRH1o154FQ" target="_blank">
                                            Rustic &#38; Redefined<br />(Password encrypted)
                                        </a><br /><br />
                                        <a href="https://priveexcavating.ca" target="_blank">
                                            Prive Excavating Ltd
                                        </a><br /><br />
                                        <a href="https://energysmartelectrical.ca" target="_blank">
                                            Energy Smart Electrical
                                        </a>
                                    </div>
                                </div>

                                <div v-else-if="disk.freeroamImg.selected == 3" id="monitor-page-4" class="monitor-page">
                                    <navigation-bar @exit-clicked="eject" />

                                    <div class="monitor-logo-row">
                                        <a class="monitor-logo-container" href="https://www.instagram.com/dueckbuiltcontracting/"
                                        @mouseover="() => this.logoMouseover('dueck-logo', 0)" target="_blank"
                                        @mouseout="() => this.logoMouseout('dueck-logo', 0)">
                                            <class-anim-switch target="monitor-logo" ref="dueck-logo">
                                                <img src="@/assets/images/client_logos/dueck2.png"
                                                    alt="Dueck Built Construction"
                                                    :style="'opacity: ' + this.disk.logoSection.hoverData[0].opacity[0]" />
                                                <img src="@/assets/images/client_logos/dueck.png"
                                                    alt="Dueck Built Construction"
                                                    :style="'opacity: ' + this.disk.logoSection.hoverData[0].opacity[1]" />
                                            </class-anim-switch>
                                        </a>
                                        
                                        <a class="monitor-logo-container"
                                        @mouseover="() => this.logoMouseover('rav-logo', 1)"
                                        @mouseout="() => this.logoMouseout('rav-logo', 1)">
                                            <class-anim-switch target="monitor-logo" ref="rav-logo">
                                                <img src="@/assets/images/client_logos/rav1.png" alt="Rav Cutz"
                                                :style="'opacity: ' + this.disk.logoSection.hoverData[1].opacity[0]" />
                                                <img src="@/assets/images/client_logos/rpr.png" alt="Rav Pabla Realty"
                                                :style="'opacity: ' + this.disk.logoSection.hoverData[1].opacity[1]" />
                                            </class-anim-switch>
                                        </a>
                                    </div>

                                    <div class="monitor-logo-row">
                                        <a class="monitor-logo-container">
                                            <div class="monitor-logo-single">
                                                <img src="@/assets/images/client_logos/lothian.png" alt="Lothian Aviation Inc." />
                                            </div>
                                        </a>

                                        <a class="monitor-logo-container" id="vik-logo-container"
                                        @mouseover="() => this.logoMouseover('vik-logo', 3)"
                                        @mouseout="() => this.logoMouseout('vik-logo', 3)">
                                            <class-anim-switch target="monitor-logo" ref="vik-logo">
                                                <img src="@/assets/images/client_logos/vik2.png"
                                                alt="Ultimate Therapy and Performance"
                                                :style="'opacity: ' + this.disk.logoSection.hoverData[3].opacity[0]" />
                                                <img src="@/assets/images/client_logos/vik.jpg"
                                                alt="Ultimate Therapy and Performance"
                                                :style="'opacity: ' + this.disk.logoSection.hoverData[3].opacity[1]" />
                                            </class-anim-switch>
                                        </a>
                                    </div>

                                    <div class="monitor-logo-row">
                                        <a class="monitor-logo-container" href="https://www.clearbrookrentals.ca/"
                                        @mouseover="() => this.logoMouseover('clearbrook-logo', 4)" target="_blank"
                                        @mouseout="() => this.logoMouseout('clearbrook-logo', 4)">
                                            <class-anim-switch target="monitor-logo" ref="clearbrook-logo">
                                                <img src="@/assets/images/client_logos/sample3.3.jpg"
                                                    alt="Clearbrook Rental Properties"
                                                    :style="'opacity: ' + this.disk.logoSection.hoverData[4].opacity[0]" />
                                                <img src="@/assets/images/client_logos/clearbrook.png"
                                                    alt="Clearbrook Rental Properties"
                                                    :style="'opacity: ' + this.disk.logoSection.hoverData[4].opacity[1]" />
                                            </class-anim-switch>
                                        </a>
                                        
                                        <a class="monitor-logo-container" href="https://energysmartelectrical.ca/"
                                        @mouseover="() => this.logoMouseover('energy-logo', 5)" target="_blank"
                                        @mouseout="() => this.logoMouseout('energy-logo', 5)">
                                            <class-anim-switch target="monitor-logo" ref="energy-logo">
                                                <img src="@/assets/images/client_logos/energy2.png"
                                                alt="Energy Smart Electrical"
                                                :style="'opacity: ' + this.disk.logoSection.hoverData[5].opacity[0]" />
                                                <img src="@/assets/images/client_logos/energy.png"
                                                alt="Energy Smart Electrical"
                                                :style="'opacity: ' + this.disk.logoSection.hoverData[5].opacity[1]" />
                                            </class-anim-switch>
                                        </a>
                                    </div>
                                </div>

                                <div v-else-if="disk.freeroamImg.selected == 4" id="monitor-page-5" class="monitor-page">
                                    <navigation-bar @exit-clicked="eject" />
                                    
                                    <table class="monitor-table">
                                        <tr>
                                            <td>Tech Labs</td>
                                            <td>Business &#38; content management</td>
                                        </tr>
                                        <tr>
                                            <td>Butler Service</td>
                                            <td>Because it saves you time</td>
                                        </tr>
                                        <tr>
                                            <td>Worklog</td>
                                            <td>Track your time sustainably.</td>
                                        </tr>
                                    </table>

                                    <div class="monitor-caption">
                                        <div>Languages/Frameworks:</div>
                                        <div>VueJS, C++, GLFW, MySQL</div>
                                    </div>
                                </div>

                                <div v-else-if="disk.freeroamImg.selected == 5" id="monitor-page-6" class="monitor-page">
                                    <div v-if="disk.sublevel == 0">
                                        <navigation-bar right-assignment="Games"
                                            :right-callback="() => this.disk.sublevel = 1" @exit-clicked="eject" />

                                        <table class="monitor-table">
                                            <tr>
                                                <td style="text-decoration: underline; cursor: pointer"
                                                @click="openBlueDemise">Game Engine</td>
                                                <td>2D game engine made by team of eight</td>
                                            </tr>
                                            <tr>
                                                <td>PayGuard</td>
                                                <td>POS to authorize budget before, leave without waiting for service</td>
                                            </tr>
                                            <tr>
                                                <td>TeachEasy</td>
                                                <td>PDF processor that makes consrtucting math equations simple</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div v-else>
                                        <navigation-bar right-assignment="University"
                                            :right-callback="() => this.disk.sublevel = 0" @exit-clicked="eject" />

                                        <!--
                                        <div class="monitor-caption">
                                            My most developed side project is
                                            <a href="https://github.com/mikesinclair66/ScoreArena" target="_blank">Score Arena</a>,
                                            a score-based 2D game that I have developed for a third time now. I plan on redeveloping
                                            it once again and making it networked through mobile devices.
                                        </div>
                                    -->
                                        <table class="monitor-table">
                                            <tr>
                                                <td>
                                                    <a href="https://youtu.be/7X2T9mEW9tY" target="_blank">Score Arena</a>
                                                </td>
                                                <td>My most developed game</td>
                                                <td>Self developed</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://youtu.be/JdoNYYLAgZA" target="_blank">Mono</a>
                                                </td>
                                                <td>Game Jam 2022</td>
                                                <td>(Team of three)</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://youtu.be/CNptpLJPwLU" target="_blank">Nivis</a>
                                                </td>
                                                <td>University project</td>
                                                <td>(Team of four)</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://youtu.be/NGLM81Nc8bY" target="_blank">Cast Away</a>
                                                </td>
                                                <td>
                                                    Concept - grew skill in models and scripts
                                                </td>
                                                <td>Team of two</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <img id="monitor-frame" src="@/assets/images/monitor.png" alt="My Skills" />
                        </div>
                        <div id="control-panel">
                            <div id="cp-fans">
                                <div class="cp-fan"></div>
                                <div class="cp-fan"></div>
                            </div>
                            <div id="cp-options">
                                <hover-id-anim target="cp-disk-lcd-component" class="cp-option" ref="cp-disk-lcd-component"
                                @click="eject" :mouse-over-func="lcdHovered" :mouse-out-func="lcdUnhovered">
                                    <div id="cp-disk-lcd"><span id="cp-disk-lcd-label">{{ this.viewport.message }}</span></div>
                                    <id-anim target="cp-disk-lcd-eject" ref="cp-disk-lcd-eject">
                                        <img src="@/assets/images/eject.png" alt="Eject Disk" />
                                        <img src="@/assets/images/eject_teal.png" alt="Eject Disk" />
                                    </id-anim>
                                </hover-id-anim>
                                
                                <div id="cp-disk-slot" class="cp-option">
                                    <img src="@/assets/images/disk_slot_top.jpg" alt="Disk Slot" />
                                    <img src="@/assets/images/disk_slot_bottom.jpg" alt="Disk Slot" />

                                    <id-anim v-if="!disk.freeroamImg.uploaded && disk.freeroamImg.selected != -1"
                                    target="cp-disk-freeroam" :style="loadFreeroamDisk"
                                    ref="cp-disk-freeroam" toggle-on-render="true">
                                        <img :src="this.disk.freeroamImg.path" alt="Click/Drag Disk to Slot" />
                                    </id-anim>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <media-component id="sm-container-bottom">
            <a href="https://www.facebook.com/profile.php?id=100093345190099" target="_blank">
                <img src="@/assets/images/fb_black.png" alt="Our Facebook" />
            </a>
            <a href="https://www.instagram.com/intivatechnologies/" target="_blank">
                <img src="@/assets/images/ig_black.png" alt="Our Instagram" />
            </a>
            <a href="https://www.linkedin.com/company/95027268" target="_blank">
                <img src="@/assets/images/ln_black.png" alt="Our LinkedIn" />
            </a>
            <a href="https://twitter.com/IntivaTech" target="_blank">
                <img src="@/assets/images/tw_black.png" alt="Our Twitter" />
            </a>
        </media-component>
    </page-desktop-only>
</template>

<script>
    import PortfolioParent from './PortfolioParent.vue';

    export default {
        extends: PortfolioParent
    }
</script>
<template>
	<page-container id="home-page">
		<id-anim-switch target="info-banner" ref="info-banner">
			<div class="info">
				<h1>techlabs.services</h1><br />
				<h3>Our platform is on its way.</h3>
				
				<p class="desktop-only">
					You can learn more about <router-link to="/michael-sinclair" class="hyperlink">Michael Sinclair&#39;s
					portfolio at this link.</router-link>
				</p><br />

				<footer-custom />

				<div class="btn" @click="leaveInfoStage">
					Okay, that&#39;s it?
				</div>
			</div>
		</id-anim-switch>

		<id-anim target="newsletter-options">
			<class-anim target="std-fadeout" id="ns-overlay" ref="ns-overlay" toggle-on-render="true"></class-anim>
			<class-anim target="std-fadeout" alternatives="tooltip" id="newsletter-tooltip" ref="newsletter-tooltip">
				Tap on one of the topics to receive related marketing via email.
			</class-anim>
			<div class="ns-option" id="ns-apps-option">
				<gradient-rotator id="ns-apps" alternate-classes="gradient-rotator-parent">
					<!-- Color List: #0082d2, #00B2D2 -->
					<class-anim target="std-fadeout" ref="ns-apps-fadeout">
						<!--
						<div class="ns-option-info">
							<h3>Upcoming Apps</h3>
							<h4>No monthly pricing</h4>
							<h4>Massive increase in productivity</h4>
						</div>
						-->
					</class-anim>
				</gradient-rotator>
				<div class="ns-option-button" @click="returnInfoStage">
					<class-anim target="std-fadeout" 
					alternatives="ns-option-button-label" ref="ns-apps-label">Go Back</class-anim>
				</div>
			</div>
			<div class="ns-option" id="ns-techlabs-option">
				<gradient-rotator id="ns-techlabs" alternate-classes="gradient-rotator-parent" starting-degree="90">
					<!-- Color List: #00D2D0, #00D2A8 -->
					<class-anim target="std-fadeout" ref="ns-techlabs-fadeout">
						<!--
						<div class="ns-option-info">
							<h3>Tech Labs</h3>
							<h4>Newsletter webmail and campaign manager</h4>
							<h4>Product transactions, promotions, and shipping</h4>
							<h4>Much more</h4>
						</div>
						-->
					</class-anim>
				</gradient-rotator>
			</div>
			<div class="ns-option" id="ns-tech-option">
				<gradient-rotator id="ns-tech" alternate-classes="gradient-rotator-parent" starting-degree="235">
					<!-- #00D2A8, #00d285 -->
					<class-anim target="std-fadeout" ref="ns-tech-fadeout">
						<!--
						<div class="ns-option-info">
							<h3>Products and Devices</h3>
							<h4>Massive increase in productivity</h4>
							<h4>Massive decrease in budget</h4>
						</div>
						-->
					</class-anim>
				</gradient-rotator>
				<div class="ns-option-button">
					<class-anim target="std-fadeout"
					alternatives="ns-option-button-label" ref="ns-tech-label">
						<a href="https://g.page/r/CScrACjNc9TEEAI/review">Reviews</a>
					</class-anim>
				</div>
			</div>
		</id-anim>

		<id-anim target="ns-popup" ref="ns-popup">
			<hover-id-anim target="newsletter-signup">
				<select class="smooth-style" id="ns-group-label">
					<option>Mr</option>
					<option>Mrs</option>
					<option>Ms</option>
					<option>Master</option>
				</select>
				<input class="smooth-style" type="text" placeholder="Full Name" id="ns-group-name" />
				<input class="smooth-style" type="text" placeholder="Email" id="ns-group-email" />
				<div class="smooth-style">Sign Up to Newsletter</div>
			</hover-id-anim>
		</id-anim>
	</page-container>
</template>

<script>
	import HomeParent from './HomeParent.vue';

	export default {
		extends: HomeParent
	}
</script>
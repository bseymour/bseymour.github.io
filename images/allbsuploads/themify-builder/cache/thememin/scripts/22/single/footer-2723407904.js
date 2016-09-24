var tbLocalScript = {"isTouch":"","isAnimationActive":"1","isParallaxActive":"1","animationInviewSelectors":[".module.wow",".themify_builder_content .themify_builder_row.wow",".module_row.wow",".builder-posts-wrap > .post.wow",".fly-in > .post",".fly-in .row_inner > .tb-column",".fade-in > .post",".fade-in .row_inner > .tb-column",".slide-up > .post",".slide-up .row_inner > .tb-column"],"createAnimationSelectors":[],"backgroundSlider":{"autoplay":5000,"speed":2000},"animationOffset":"100","videoPoster":"http:\/\/allbs.co.uk\/wp-content\/themes\/thememin\/themify\/themify-builder\/img\/blank.png","backgroundVideoLoop":"yes","builder_url":"http:\/\/allbs.co.uk\/wp-content\/themes\/thememin\/themify\/themify-builder","framework_url":"http:\/\/allbs.co.uk\/wp-content\/themes\/thememin\/themify","version":"2.5.0","fullwidth_support":"1","fullwidth_container":"body","loadScrollHighlight":"1"};
var themifyScript = {"lightbox":{"lightboxSelector":".lightbox","lightboxOn":true,"lightboxContentImages":true,"lightboxContentImagesSelector":".post-content a[href$=jpg],.page-content a[href$=jpg],.post-content a[href$=gif],.page-content a[href$=gif],.post-content a[href$=png],.page-content a[href$=png],.post-content a[href$=JPG],.page-content a[href$=JPG],.post-content a[href$=GIF],.page-content a[href$=GIF],.post-content a[href$=PNG],.page-content a[href$=PNG],.post-content a[href$=jpeg],.page-content a[href$=jpeg],.post-content a[href$=JPEG],.page-content a[href$=JPEG]","theme":"pp_default","social_tools":false,"allow_resize":true,"show_title":false,"overlay_gallery":false,"screenWidthNoLightbox":600,"deeplinking":false,"contentImagesAreas":".post, .type-page, .type-highlight, .type-slider","gallerySelector":".gallery-icon > a[href$=jpg],.gallery-icon > a[href$=gif],.gallery-icon > a[href$=png],.gallery-icon > a[href$=JPG],.gallery-icon > a[href$=GIF],.gallery-icon > a[href$=PNG],.gallery-icon > a[href$=jpeg],.gallery-icon > a[href$=JPEG]","lightboxGalleryOn":true},"lightboxContext":"body","isTouch":"false"};
var tbScrollHighlight = {"fixedHeaderSelector":"","speed":"900","navigation":"#main-nav","scrollOffset":"0"};

/* http://allbs.co.uk/wp-content/themes/thememin/themify/themify-builder/js/themify.builder.module.plugins.js */
/**
 * Tabify
 */
;(function ($) {

	'use strict';

	$.fn.tabify = function () {
		return this.each(function () {
			var tabs = $(this);
			if ( ! tabs.data( 'tabify' ) ) {
				tabs.data( 'tabify', true );
				$('ul.tab-nav li:first', tabs).addClass('current');
				$('div:first', tabs).show();
				var tabLinks = $('ul.tab-nav li', tabs);
				$(tabLinks).click(function () {
					$(this).addClass('current').attr( 'aria-expanded', 'true' ).siblings().removeClass('current').attr( 'aria-expanded', 'false' );
					$('.tab-content', tabs).hide().attr( 'aria-hidden', 'true' );
					var activeTab = $(this).find('a').attr( 'href' );
					$(activeTab).show().attr( 'aria-hidden', 'false' ).trigger( 'resize' );
					$( 'body' ).trigger( 'tf_tabs_switch', [ activeTab, tabs ] );
					if ( $(activeTab).find('.shortcode.map').length > 0 ) {
						$(activeTab).find('.shortcode.map').each(function(){
							var mapInit = $(this).find('.map-container').data('map'),
								center = mapInit.getCenter();
							google.maps.event.trigger(mapInit, 'resize');
							mapInit.setCenter(center);
						});
					}
					return false;
				});
				$('.tab-content', tabs).find('a[href^="#tab-"]').on('click', function(event){
					event.preventDefault();
					var dest = $(this).prop('hash').replace('#tab-', ''),
						contentID = $('.tab-content', tabs).eq( dest - 1 ).prop('id');
					if ( $('a[href^="#'+ contentID +'"]').length > 0 ) {
						$('a[href^="#'+ contentID +'"]').trigger('click');
					}
				});
			}
		});
	};

	// $('img.photo',this).themifyBuilderImagesLoaded(myFunction)
	// execute a callback when all images have loaded.
	// needed because .load() doesn't work on cached images
	$.fn.themifyBuilderImagesLoaded = function(callback){
	  var elems = this.filter('img'),
		  len   = elems.length,
		  blank = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
		  
	  elems.bind('load.imgloaded',function(){
		  if (--len <= 0 && this.src !== blank){ 
			elems.unbind('load.imgloaded');
			callback.call(elems,this); 
		  }
	  }).each(function(){
		 // cached images don't fire load sometimes, so we reset src.
		 if (this.complete || this.complete === undefined){
			var src = this.src;
			// webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
			// data uri bypasses webkit log warning (thx doug jones)
			this.src = blank;
			this.src = src;
		 }  
	  }); 
	 
	  return this;
	};
})(jQuery);

/*
 * Parallax Scrolling Builder
 */
(function( $ ){

	'use strict';

	var $window = $(window);
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});

	$.fn.builderParallax = function(xpos, speedFactor, outerHeight) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0, resizeId;
		
		//get the starting position of each element to have parallax applied to it		
		$this.each(function(){
			firstTop = $this.offset().top;
		});
		$window.resize(function(){
			clearTimeout(resizeId);
			resizeId = setTimeout(function(){
				$this.each(function(){
					firstTop = $this.offset().top;
				});
			}, 500);
		});

		if (outerHeight) {
			getHeight = function(jqo) {
				return jqo.outerHeight(true);
			};
		} else {
			getHeight = function(jqo) {
				return jqo.height();
			};
		}
			
		// setup defaults if arguments aren't specified
		if (arguments.length < 1 || xpos === null) xpos = "50%";
		if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
		if (arguments.length < 3 || outerHeight === null) outerHeight = true;
		
		// function to be called whenever the window is scrolled or resized
		function update(){
			var pos = $window.scrollTop();				

			$this.each(function(){
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element);

				// Check if totally above or totally below viewport
				if (top + height < pos || top > pos + windowHeight) {
					return;
				}

				$this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
			});
		}		

		$window.bind('scroll', update).resize(update);
		update();
	};
})(jQuery);

/* http://allbs.co.uk/wp-content/themes/thememin/themify/js/lightbox.js */
/*! Magnific Popup - v0.9.9 - 2013-12-27
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2013 Dmitry Semenov; */
(function(e){var t,n,i,o,r,a,s,l="Close",c="BeforeClose",d="AfterClose",u="BeforeAppend",p="MarkupParse",f="Open",m="Change",g="mfp",h="."+g,v="mfp-ready",C="mfp-removing",y="mfp-prevent-close",w=function(){},b=!!window.jQuery,I=e(window),x=function(e,n){t.ev.on(g+e+h,n)},k=function(t,n,i,o){var r=document.createElement("div");return r.className="mfp-"+t,i&&(r.innerHTML=i),o?n&&n.appendChild(r):(r=e(r),n&&r.appendTo(n)),r},T=function(n,i){t.ev.triggerHandler(g+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},E=function(n){return n===s&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),s=n),t.currTemplate.closeBtn},_=function(){e.magnificPopup.instance||(t=new w,t.init(),e.magnificPopup.instance=t)},S=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};w.prototype={constructor:w,init:function(){var n=navigator.appVersion;t.isIE7=-1!==n.indexOf("MSIE 7."),t.isIE8=-1!==n.indexOf("MSIE 8."),t.isLowIE=t.isIE7||t.isIE8,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=S(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),o=e(document),t.popupsCache={}},open:function(n){i||(i=e(document.body));var r;if(n.isObj===!1){t.items=n.items.toArray(),t.index=0;var s,l=n.items;for(r=0;l.length>r;r++)if(s=l[r],s.parsed&&(s=s.el[0]),s===n.el[0]){t.index=r;break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0;if(t.isOpen)return t.updateItemHTML(),void 0;t.types=[],a="",t.ev=n.mainEl&&n.mainEl.length?n.mainEl.eq(0):o,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=k("bg").on("click"+h,function(){t.close()}),t.wrap=k("wrap").attr("tabindex",-1).on("click"+h,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=k("container",t.wrap)),t.contentContainer=k("content"),t.st.preloader&&(t.preloader=k("preloader",t.container,t.st.tLoading));var c=e.magnificPopup.modules;for(r=0;c.length>r;r++){var d=c[r];d=d.charAt(0).toUpperCase()+d.slice(1),t["init"+d].call(t)}T("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(x(p,function(e,t,n,i){n.close_replaceWith=E(i.type)}),a+=" mfp-close-btn-in"):t.wrap.append(E())),t.st.alignTop&&(a+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:I.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:o.height(),position:"absolute"}),t.st.enableEscapeKey&&o.on("keyup"+h,function(e){27===e.keyCode&&t.close()}),I.on("resize"+h,function(){t.updateSize()}),t.st.closeOnContentClick||(a+=" mfp-auto-cursor"),a&&t.wrap.addClass(a);var u=t.wH=I.height(),m={};if(t.fixedContentPos&&t._hasScrollBar(u)){var g=t._getScrollbarSize();g&&(m.marginRight=g)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):m.overflow="hidden");var C=t.st.mainClass;return t.isIE7&&(C+=" mfp-ie7"),C&&t._addClassToMFP(C),t.updateItemHTML(),T("BuildControls"),e("html").css(m),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||i),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(v),t._setFocus()):t.bgOverlay.addClass(v),o.on("focusin"+h,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(u),T(f),n},close:function(){t.isOpen&&(T(c),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(C),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){T(l);var n=C+" "+v+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var i={marginRight:""};t.isIE7?e("body, html").css("overflow",""):i.overflow="",e("html").css(i)}o.off("keyup"+h+" focusin"+h),t.ev.off(h),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,T(d)},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n;t.wrap.css("height",i),t.wH=i}else t.wH=e||I.height();t.fixedContentPos||t.wrap.css("height",t.wH),T("Resize")},updateItemHTML:function(){var n=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index));var i=n.type;if(T("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var o=t.st[i]?t.st[i].markup:!1;T("FirstMarkupParse",o),t.currTemplate[i]=o?e(o):!0}r&&r!==n.type&&t.container.removeClass("mfp-"+r+"-holder");var a=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i]);t.appendContent(a,i),n.preloaded=!0,T(m,n),r=n.type,t.container.prepend(t.contentContainer),T("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[n]===!0?t.content.find(".mfp-close").length||t.content.append(E()):t.content=e:t.content="",T(u),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i,o=t.items[n];if(o.tagName?o={el:e(o)}:(i=o.type,o={data:o,src:o.src}),o.el){for(var r=t.types,a=0;r.length>a;a++)if(o.el.hasClass("mfp-"+r[a])){i=r[a];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=i||t.st.type||"inline",o.index=n,o.parsed=!0,t.items[n]=o,T("ElementParse",o),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)};n||(n={});var o="click.magnificPopup";n.mainEl=e,n.items?(n.isObj=!0,e.off(o).on(o,i)):(n.isObj=!1,n.delegate?e.off(o).on(o,n.delegate,i):(n.items=e,e.off(o).on(o,i)))},_openClick:function(n,i,o){var r=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick;if(r||2!==n.which&&!n.ctrlKey&&!n.metaKey){var a=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(t))return!0}else if(a>I.width())return!0;n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),o.el=e(n.mfpEl),o.delegate&&(o.items=i.find(o.delegate)),t.open(o)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),i||"loading"!==e||(i=t.st.tLoading);var o={status:e,text:i};T("UpdateStatus",o),e=o.status,i=o.text,t.preloader.html(i),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass(y)){var i=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(i&&o)return!0;if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0;if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(o&&e.contains(document,n))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?o.height():document.body.scrollHeight)>(e||I.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){return n.target===t.wrap[0]||e.contains(t.wrap[0],n.target)?void 0:(t._setFocus(),!1)},_parseMarkup:function(t,n,i){var o;i.data&&(n=e.extend(i.data,n)),T(p,[t,n,i]),e.each(n,function(e,n){if(void 0===n||n===!1)return!0;if(o=e.split("_"),o.length>1){var i=t.find(h+"-"+o[0]);if(i.length>0){var r=o[1];"replaceWith"===r?i[0]!==n[0]&&i.replaceWith(n):"img"===r?i.is("img")?i.attr("src",n):i.replaceWith('<img src="'+n+'" class="'+i.attr("class")+'" />'):i.attr(o[1],n)}}else t.find(h+"-"+e).html(n)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.id="mfp-sbm",e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:w.prototype,modules:[],open:function(t,n){return _(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(n){_();var i=e(this);if("string"==typeof n)if("open"===n){var o,r=b?i.data("magnificPopup"):i[0].magnificPopup,a=parseInt(arguments[1],10)||0;r.items?o=r.items[a]:(o=i,r.delegate&&(o=o.find(r.delegate)),o=o.eq(a)),t._openClick({mfpEl:o},i,r)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1));else n=e.extend(!0,{},n),b?i.data("magnificPopup",n):i[0].magnificPopup=n,t.addGroup(i,n);return i};var P,O,z,M="inline",B=function(){z&&(O.after(z.addClass(P)).detach(),z=null)};e.magnificPopup.registerModule(M,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(M),x(l+"."+M,function(){B()})},getInline:function(n,i){if(B(),n.src){var o=t.st.inline,r=e(n.src);if(r.length){var a=r[0].parentNode;a&&a.tagName&&(O||(P=o.hiddenClass,O=k(P),P="mfp-"+P),z=r.after(O).detach().removeClass(P)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),r=e("<div>");return n.inlineElement=r,r}return t.updateStatus("ready"),t._parseMarkup(i,{},n),i}}});var F,H="ajax",L=function(){F&&i.removeClass(F)},A=function(){L(),t.req&&t.req.abort()};e.magnificPopup.registerModule(H,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(H),F=t.st.ajax.cursor,x(l+"."+H,A),x("BeforeChange."+H,A)},getAjax:function(n){F&&i.addClass(F),t.updateStatus("loading");var o=e.extend({url:n.src,success:function(i,o,r){var a={data:i,xhr:r};T("ParseAjax",a),t.appendContent(e(a.data),H),n.finished=!0,L(),t._setFocus(),setTimeout(function(){t.wrap.addClass(v)},16),t.updateStatus("ready"),T("AjaxContentAdded")},error:function(){L(),n.finished=n.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",n.src))}},t.st.ajax.settings);return t.req=e.ajax(o),""}}});var j,N=function(n){if(n.data&&void 0!==n.data.title)return n.data.title;var i=t.st.image.titleSrc;if(i){if(e.isFunction(i))return i.call(t,n);if(n.el)return n.el.attr(i)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=t.st.image,n=".image";t.types.push("image"),x(f+n,function(){"image"===t.currItem.type&&e.cursor&&i.addClass(e.cursor)}),x(l+n,function(){e.cursor&&i.removeClass(e.cursor),I.off("resize"+h)}),x("Resize"+n,t.resizeImage),t.isLowIE&&x("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var n=0;t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,j&&clearInterval(j),e.isCheckingImgSize=!1,T("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,i=e.img[0],o=function(r){j&&clearInterval(j),j=setInterval(function(){return i.naturalWidth>0?(t._onImageHasSize(e),void 0):(n>200&&clearInterval(j),n++,3===n?o(10):40===n?o(50):100===n&&o(500),void 0)},r)};o(1)},getImage:function(n,i){var o=0,r=function(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,T("ImageLoadComplete")):(o++,200>o?setTimeout(r,100):a()))},a=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",s.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},s=t.st.image,l=i.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",n.img=e(c).on("load.mfploader",r).on("error.mfploader",a),c.src=n.src,l.is("img")&&(n.img=n.img.clone()),c=n.img[0],c.naturalWidth>0?n.hasSize=!0:c.width||(n.hasSize=!1)}return t._parseMarkup(i,{title:N(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?(j&&clearInterval(j),n.loadError?(i.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",n.src))):(i.removeClass("mfp-loading"),t.updateStatus("ready")),i):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,i.addClass("mfp-loading"),t.findImageSize(n)),i)}}});var W,R=function(){return void 0===W&&(W=void 0!==document.createElement("p").style.MozTransform),W};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,i=".zoom";if(n.enabled&&t.supportsTransition){var o,r,a=n.duration,s=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+n.duration/1e3+"s "+n.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return o["-webkit-"+r]=o["-moz-"+r]=o["-o-"+r]=o[r]=i,t.css(o),t},d=function(){t.content.css("visibility","visible")};x("BuildControls"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),e=t._getItemToZoom(),!e)return d(),void 0;r=s(e),r.css(t._getOffset()),t.wrap.append(r),o=setTimeout(function(){r.css(t._getOffset(!0)),o=setTimeout(function(){d(),setTimeout(function(){r.remove(),e=r=null,T("ZoomAnimationEnded")},16)},a)},16)}}),x(c+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=a,!e){if(e=t._getItemToZoom(),!e)return;r=s(e)}r.css(t._getOffset(!0)),t.wrap.append(r),t.content.css("visibility","hidden"),setTimeout(function(){r.css(t._getOffset())},16)}}),x(l+i,function(){t._allowZoom()&&(d(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return t.currItem.hasSize?t.currItem.img:!1},_getOffset:function(n){var i;i=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem);var o=i.offset(),r=parseInt(i.css("padding-top"),10),a=parseInt(i.css("padding-bottom"),10);o.top-=e(window).scrollTop()-r;var s={width:i.width(),height:(b?i.innerHeight():i[0].offsetHeight)-a-r};return R()?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var Z="iframe",q="//about:blank",D=function(e){if(t.currTemplate[Z]){var n=t.currTemplate[Z].find("iframe");n.length&&(e||(n[0].src=q),t.isIE8&&n.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(Z,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},youtudotbe:{index:"youtu.be",id:function(url){var m=url.match(/^.+youtu.be\/(.*?)\?(.*)/);if(m!==null && m[1]!==undefined){return m[1];}return null;},src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"},dailymotion:{index:'dailymotion.com',id:function(url){var m=url.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);if(m!==null){if(m[4]!==undefined){return m[4];}return m[2];} return null;},src:'http://www.dailymotion.com/embed/video/%id%'},funnyordie:{index:'funnyordie.com',id:function(url){var m = url.match(/^.+funnyordie.com\/videos\/(.*?)\//);if(m!==null){if(m[1]!==undefined){return m[1];}}return null;},src: 'http://www.funnyordie.com/embed/%id%'},bliptv:{index:'blip.tv',id:function(url){var purl=document.createElement('a');purl.href=url;return purl.pathname.trim();},src:'http://www.blip.tv/play%id%/'}}},proto:{initIframe:function(){t.types.push(Z),x("BeforeChange",function(e,t,n){t!==n&&(t===Z?D():n===Z&&D(!0))}),x(l+"."+Z,function(){D()})},getIframe:function(n,i){var o=n.src,r=t.st.iframe;e.each(r.patterns,function(){return o.indexOf(this.index)>-1?(this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1):void 0});var a={};return r.srcAction&&(a[r.srcAction]=o),t._parseMarkup(i,a,n),t.updateStatus("ready"),i}}});var K=function(e){var n=t.items.length;return e>n-1?e-n:0>e?n+e:e},Y=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=t.st.gallery,i=".mfp-gallery",r=Boolean(e.fn.mfpFastClick);return t.direction=!0,n&&n.enabled?(a+=" mfp-gallery",x(f+i,function(){n.navigateByImgClick&&t.wrap.on("click"+i,".mfp-img",function(){return t.items.length>1?(t.next(),!1):void 0}),o.on("keydown"+i,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),x("UpdateStatus"+i,function(e,n){n.text&&(n.text=Y(n.text,t.currItem.index,t.items.length))}),x(p+i,function(e,i,o,r){var a=t.items.length;o.counter=a>1?Y(n.tCounter,r.index,a):""}),x("BuildControls"+i,function(){if(t.items.length>1&&n.arrows&&!t.arrowLeft){var i=n.arrowMarkup,o=t.arrowLeft=e(i.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass(y),a=t.arrowRight=e(i.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass(y),s=r?"mfpFastClick":"click";o[s](function(){t.prev()}),a[s](function(){t.next()}),t.isIE7&&(k("b",o[0],!1,!0),k("a",o[0],!1,!0),k("b",a[0],!1,!0),k("a",a[0],!1,!0)),t.container.append(o.add(a))}}),x(m+i,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),x(l+i,function(){o.off(i),t.wrap.off("click"+i),t.arrowLeft&&r&&t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),t.arrowRight=t.arrowLeft=null}),void 0):!1},next:function(){t.direction=!0,t.index=K(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=K(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,n=t.st.gallery.preload,i=Math.min(n[0],t.items.length),o=Math.min(n[1],t.items.length);for(e=1;(t.direction?o:i)>=e;e++)t._preloadItem(t.index+e);for(e=1;(t.direction?i:o)>=e;e++)t._preloadItem(t.index-e)},_preloadItem:function(n){if(n=K(n),!t.items[n].preloaded){var i=t.items[n];i.parsed||(i=t.parseEl(n)),T("LazyLoad",i),"image"===i.type&&(i.img=e('<img class="mfp-img" />').on("load.mfploader",function(){i.hasSize=!0}).on("error.mfploader",function(){i.hasSize=!0,i.loadError=!0,T("LazyLoadError",i)}).attr("src",i.src)),i.preloaded=!0}}}});var U="retina";e.magnificPopup.registerModule(U,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio;n=isNaN(n)?n():n,n>1&&(x("ImageHasSize."+U,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),x("ElementParse."+U,function(t,i){i.src=e.replaceSrc(i,n)}))}}}}),function(){var t=1e3,n="ontouchstart"in window,i=function(){I.off("touchmove"+r+" touchend"+r)},o="mfpFastClick",r="."+o;e.fn.mfpFastClick=function(o){return e(this).each(function(){var a,s=e(this);if(n){var l,c,d,u,p,f;s.on("touchstart"+r,function(e){u=!1,f=1,p=e.originalEvent?e.originalEvent.touches[0]:e.touches[0],c=p.clientX,d=p.clientY,I.on("touchmove"+r,function(e){p=e.originalEvent?e.originalEvent.touches:e.touches,f=p.length,p=p[0],(Math.abs(p.clientX-c)>10||Math.abs(p.clientY-d)>10)&&(u=!0,i())}).on("touchend"+r,function(e){i(),u||f>1||(a=!0,e.preventDefault(),clearTimeout(l),l=setTimeout(function(){a=!1},t),o())})})}s.on("click"+r,function(){a||o()})})},e.fn.destroyMfpFastClick=function(){e(this).off("touchstart"+r+" click"+r),n&&I.off("touchmove"+r+" touchend"+r)}}(),_()})(window.jQuery||window.Zepto);
var themify_vars = {"version":"2.5.0","url":"http:\/\/allbs.co.uk\/wp-content\/themes\/thememin\/themify","TB":"1"};

/* http://allbs.co.uk/wp-content/themes/thememin/themify/js/main.js */
;
var Themify, ThemifyGallery;
(function ($, window, document, undefined) {
    'use strict';

    /* window load fires only once in IE */
    window.addEventListener("load", function () {
        window.loaded = true;
    });
    Themify = {
        wow:null,
        Init: function () {
            if(typeof tbLocalScript!=='undefined' && tbLocalScript){
                var $self = Themify;
                $(document).ready(function () {
                    $self.LoadAsync(tbLocalScript.builder_url + '/js/themify.builder.script.js'); // this script should be always loaded even there is no builder content because it's also requires for themify_shortcode for exp: animation js
                });
                $('body').on('builderscriptsloaded.themify', function () {
                    $self.LoadAsync(tbLocalScript.builder_url + '/js/themify.builder.script.js');
                });
            }
            else{
                this.bindEvents();
            }
        },
        bindEvents: function () {
            var $self = Themify;
            if (window.loaded) {
                $('.shortcode.slider, .shortcode.post-slider').css({'height': 'auto', 'visibility': 'visible'});
                $self.InitCarousel();
                $self.InitGallery();
                $self.InitMap();
            }
            else {
                $(window).load(function () {
                    $('.shortcode.slider, .shortcode.post-slider').css({'height': 'auto', 'visibility': 'visible'});
                    $self.InitCarousel();
                    $self.InitGallery();
                });
                $(document).ready(function () {
                    $self.InitMap();
                    $self.wowInit();
                });
            }
            $('body').on('builder_load_module_partial builder_toggle_frontend', this.InitMap); // builder toggle/update module map.
        },
        InitCarousel: function () {
            if ($('.slides[data-slider]').length > 0) {
                this.LoadAsync(themify_vars.url + '/js/carousel.js', this.carouselCalback, null, null, function () {
                    return ('undefined' !== typeof $.fn.carouFredSel);
                });
            }
        },
        carouselCalback: function () {

            $('.slides[data-slider]').each(function () {
                $(this).find("> br, > p").remove();
                var $this = $(this),
                        $data = $this.data('slider'),
                                height = ( typeof $data.height === 'undefined' ) ? 'auto' : $data.height,
                        $numsldr = $data.numsldr,
                        $slideContainer = 'undefined' !== typeof $data.custom_numsldr ? '#' + $data.custom_numsldr : '#slider-' + $numsldr,
						$args = {
                            responsive: true,
                            swipe: true,
                            circular: $data.wrapvar,
                            infinite: $data.wrapvar,
                            auto: {
                                play: $data.play,
                                timeoutDuration: $data.auto * 1000,
                                duration: $data.speed * 1000,
                                pauseOnHover: $data.pause_hover
                            },
                            scroll: {
                                items: parseInt($data.scroll),
                                duration: $data.speed * 1000,
                                fx: $data.effect
                            },
                            items: {
                                visible: {
                                    min: 1,
                                    max: parseInt($data.visible)
                                },
                                width: 120,
								height: height
                            },
                            onCreate: function (items) {
                                $($slideContainer).css({'visibility': 'visible', 'height': 'auto'});
                                $this.trigger('updateSizes');
                            }
                        };
                if ($data.slider_nav) {
                    $args.prev = $slideContainer + ' .carousel-prev';
                    $args.next = $slideContainer + ' .carousel-next';
                }
                if ($data.pager) {
                    $args.pagination = $slideContainer + ' .carousel-pager';
                }
                $(this).carouFredSel($args);
            });



            var tscpsDidResize = false;
            $(window).on("resize", function () {
                tscpsDidResize = true;
            });
            setInterval(function () {
                if (tscpsDidResize) {
                    tscpsDidResize = false;
                    $(".slides[data-slider]").each(function () {
                        var heights = [],
                                newHeight,
                                $self = $(this);
                        $self.find("li").each(function () {
                            heights.push($(this).outerHeight());
                        });
                        newHeight = Math.max.apply(Math, heights);
                        $self.outerHeight(newHeight);
                        $(".caroufredsel_wrapper").outerHeight(newHeight);
                    });
                }
            }, 500);

        },
        InitMap: function () {
            var $self = Themify;
            if ($('.themify_map').length > 0) {
                if (typeof google !== 'object' || typeof google.maps !== 'object') {
                    $self.LoadAsync('//maps.googleapis.com/maps/api/js?v=3.exp&callback=Themify.MapCallback', false, true, true);
                }
                else {
                    $self.MapCallback();
                }
            }
        },
        MapCallback: function () {
            var $maps = $('.themify_map');
            $maps.each(function ($i) {
                var $data = $(this).data('map');
                var address = $data.address,
                        zoom = parseInt($data.zoom),
                        type = $data.type,
                        scroll = $data.scroll,
                        drag = $data.drag,
                        node = this;
                var delay = $i* 1000;
                setTimeout(function () {
                    var geo = new google.maps.Geocoder(),
                            latlng = new google.maps.LatLng(-34.397, 150.644),
                            mapOptions = {
                                zoom: zoom,
                                center: latlng,
                                mapTypeId: google.maps.MapTypeId.ROADMAP,
                                scrollwheel: scroll,
                                draggable: drag
                            };
                    switch (type.toUpperCase()) {
                        case 'ROADMAP':
                            mapOptions.mapTypeId = google.maps.MapTypeId.ROADMAP;
                            break;
                        case 'SATELLITE':
                            mapOptions.mapTypeId = google.maps.MapTypeId.SATELLITE;
                            break;
                        case 'HYBRID':
                            mapOptions.mapTypeId = google.maps.MapTypeId.HYBRID;
                            break;
                        case 'TERRAIN':
                            mapOptions.mapTypeId = google.maps.MapTypeId.TERRAIN;
                            break;
                    }

                    var map = new google.maps.Map(node, mapOptions),
                            revGeocoding = $(node).data('reverse-geocoding') ? true : false;

                    /* store a copy of the map object in the dom node, for future reference */
                    $(node).data('gmap_object', map);

                    if (revGeocoding) {
                        var latlngStr = address.split(',', 2),
                                lat = parseFloat(latlngStr[0]),
                                lng = parseFloat(latlngStr[1]),
                                geolatlng = new google.maps.LatLng(lat, lng),
                                geoParams = {'latLng': geolatlng};
                    } else {
                        var geoParams = {'address': address};
                    }

                    geo.geocode(geoParams, function (results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            var position = revGeocoding ? geolatlng : results[0].geometry.location;
                            map.setCenter(position);
                            var marker = new google.maps.Marker({
                                map: map,
                                position: position
                            }),
                                    info = $(node).data('info-window');
                            if (undefined !== info) {
                                var contentString = '<div class="themify_builder_map_info_window">' + info + '</div>',
                                        infowindow = new google.maps.InfoWindow({
                                            content: contentString
                                        });

                                google.maps.event.addListener(marker, 'click', function () {
                                    infowindow.open(map, marker);
                                });
                            }
                        }
                    });
                }, delay);
            });
        },
        wowInit: function() {
            if ((typeof tbLocalScript==='undefined' || !tbLocalScript) || tbLocalScript.animationInviewSelectors && tbLocalScript.animationInviewSelectors.length>0){
                    if(!Themify.wow){
                        Themify.LoadAsync(themify_vars.url+'/js/wow.js',Themify.wowCallback, null, null, function(){
                            return (Themify.wow);
                        });
                    }
                    else{
                        Themify.wowCallback();
                        return (Themify.wow);
                    }
            }
        },
        wowCallback: function() {
                var self = Themify;
                if(themify_vars.TB){
                    ThemifyBuilderModuleJs.animationOnScroll();
                }
                self.wow = new WOW({
                        live: true,
                        offset : typeof tbLocalScript!=='undefined' && tbLocalScript?parseInt( tbLocalScript.animationOffset ):100
                });
                self.wow.init();

                $('body').on( 'builder_load_module_partial builder_toggle_frontend', function(){
                        self.wow.doSync();
                        self.wow.sync();
                });

                // duck-punching WOW to get delay and iteration from classnames
                if( typeof self.wow.__proto__ !== 'undefined' ) {
                        self.wow.__proto__.applyStyle = function(box, hidden) {
                        var delay, duration, iteration;
                        duration = box.getAttribute('data-wow-duration');
                        delay = box.getAttribute('class').match(/animation_effect_delay_(\d*)/);
                        if( null != delay ) delay = delay[1] + 's';
                        iteration = box.getAttribute('class').match(/animation_effect_repeat_(\d*)/);
                        if( null != iteration ) iteration = iteration[1];
                        return this.animate((function(_this) {
                                  return function() {
                                        return _this.customStyle(box, hidden, duration, delay, iteration);
                                  };
                        })(this));
                  };
                }
        },
        LoadAsync: function (src, callback, version, defer, test) {
            var id = src.split("/").pop().replace(/\./g, '_'), // Make script filename as ID
                    existElemens = document.getElementById(id);

            if (existElemens) {
                if (callback) {
                    if (test) {
                        var callbackTimer = setInterval(function () {
                            var call = false;
                            try {
                                call = test.call();
                            } catch (e) {
                            }

                            if (call) {
                                clearInterval(callbackTimer);
                                callback.call();
                            }
                        }, 100);
                    } else {
                        setTimeout(callback, 110);
                    }
                }
                return;
            }
            var s, r, t;
            r = false;
            s = document.createElement('script');
            s.type = 'text/javascript';
            s.id = id;
            s.src = !version && 'undefined' !== typeof tbLocalScript ? src + '?version=' + tbLocalScript.version : src;
            if (!defer) {
                s.async = true;
            }
            else {
                s.defer = true;
            }
            s.onload = s.onreadystatechange = function () {
                if (!r && (!this.readyState || this.readyState === 'complete'))
                {
                    r = true;
                    if (callback) {
                        callback();
                    }
                }
            };
            t = document.getElementsByTagName('script')[0];
            t.parentNode.insertBefore(s, t);
        },
        LoadCss: function (href, version, before, media) {

            if ($("link[href='" + href + "']").length > 0) {
                return;
            }
            var doc = window.document;
            var ss = doc.createElement("link");
            var ref;
            if (before) {
                ref = before;
            }
            else {
                var refs = (doc.body || doc.getElementsByTagName("head")[ 0 ]).childNodes;
                ref = refs[ refs.length - 1];
            }

            var sheets = doc.styleSheets;
            ss.rel = "stylesheet";
            ss.href = version ? href + '?version=' + version : href;
            // temporarily set media to something inapplicable to ensure it'll fetch without blocking render
            ss.media = "only x";
            ss.async = 'async';

            // Inject link
            // Note: `insertBefore` is used instead of `appendChild`, for safety re: http://www.paulirish.com/2011/surefire-dom-element-insertion/
            ref.parentNode.insertBefore(ss, (before ? ref : ref.nextSibling));
            // A method (exposed on return object for external use) that mimics onload by polling until document.styleSheets until it includes the new sheet.
            var onloadcssdefined = function (cb) {
                var resolvedHref = ss.href;
                var i = sheets.length;
                while (i--) {
                    if (sheets[ i ].href === resolvedHref) {
                        return cb();
                    }
                }
                setTimeout(function () {
                    onloadcssdefined(cb);
                });
            };

            // once loaded, set link's media back to `all` so that the stylesheet applies once it loads
            ss.onloadcssdefined = onloadcssdefined;
            onloadcssdefined(function () {
                ss.media = media || "all";
            });
            return ss;
        },
        video: function () {
            if ($('.themify_video_desktop a').length > 0) {
                if (typeof flowplayer === 'undefined') {
                    this.LoadAsync(themify_vars.url + '/js/flowplayer-3.2.4.min.js', this.videoCalback);
                }
                else {
                    this.videoCalback();
                }
            }
        },
        videoCalback: function () {
            $('.themify_video_desktop a').each(function () {
                flowplayer(
                        $(this).attr('id'),
                        themify_vars.url + "/js/flowplayer-3.2.5.swf",
                        {
                            clip: {autoPlay: false}
                        }
                );
            });
        },
        InitGallery: function ($el, $args) {
            var lightboxConditions = ((themifyScript.lightbox.lightboxContentImages && $(themifyScript.lightbox.contentImagesAreas).length && themifyScript.lightbox.lightboxGalleryOn) || themifyScript.lightbox.lightboxGalleryOn) ? true : false;
            if ($('.module.module-gallery').length > 0 || $('.module.module-image').length > 0 || $('.lightbox').length || lightboxConditions) {
                if ($('.module.module-gallery').length > 0)
                    this.showcaseGallery();
                this.LoadAsync(themify_vars.url + '/js/themify.gallery.js', function () {
                    Themify.GalleryCallBack($el, $args);
                }, null, null, function () {
                    return ('undefined' !== typeof ThemifyGallery);
                });
            }
        },
        GalleryCallBack: function ($el, $args) {
            if (!$el) {
                $el = $(themifyScript.lightboxContext);
            }
            $args = !$args && themifyScript.extraLightboxArgs ? themifyScript.extraLightboxArgs : {};
            ThemifyGallery.init({'context': $el, 'extraLightboxArgs': $args});
        },
        showcaseGallery: function () {
            $('body').on('click', '.module.module-gallery.layout-showcase a', function () {
                $(this).closest('.gallery').find('.gallery-showcase-image img').prop('src', $(this).data('image'));
                return false;
            });
        },
        isPageHasBuilderContent: function () {
            var check_builder = $('.themify_builder_content').filter(function () {
                return $.trim($(this).html().toString()).length > 0;
            });
            return check_builder.length;
        }
    };


    Themify.Init();

}(jQuery, window, document));

/* http://s0.wp.com/wp-content/js/devicepx-jetpack.js */
(function(root,ns,factory){"use strict";if(typeof(module)!=='undefined'&&module.exports){module.exports=factory(ns,root);}else if(typeof(define)==='function'&&define.amd){define("factory",function(){return factory(ns,root);});}else{root[ns]=factory(ns,root);}}(window,'detectZoom',function(){var devicePixelRatio=function(){return window.devicePixelRatio||1;};var fallback=function(){return{zoom:1,devicePxPerCssPx:1};};var ie8=function(){var zoom=Math.round((screen.deviceXDPI/screen.logicalXDPI)*100)/100;return{zoom:zoom,devicePxPerCssPx:zoom*devicePixelRatio()};};var ie10=function(){var zoom=Math.round((document.documentElement.offsetHeight/window.innerHeight)*100)/100;return{zoom:zoom,devicePxPerCssPx:zoom*devicePixelRatio()};};var webkitMobile=function(){var deviceWidth=(Math.abs(window.orientation)==90)?screen.height:screen.width;var zoom=deviceWidth/window.innerWidth;return{zoom:zoom,devicePxPerCssPx:zoom*devicePixelRatio()};};var webkit=function(){var important=function(str){return str.replace(/;/g," !important;");};var div=document.createElement('div');div.innerHTML="1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0";div.setAttribute('style',important('font: 100px/1em sans-serif; -webkit-text-size-adjust: none; text-size-adjust: none; height: auto; width: 1em; padding: 0; overflow: visible;'));var container=document.createElement('div');container.setAttribute('style',important('width:0; height:0; overflow:hidden; visibility:hidden; position: absolute;'));container.appendChild(div);document.body.appendChild(container);var zoom=1000/div.clientHeight;zoom=Math.round(zoom*100)/100;document.body.removeChild(container);return{zoom:zoom,devicePxPerCssPx:zoom*devicePixelRatio()};};var firefox4=function(){var zoom=mediaQueryBinarySearch('min--moz-device-pixel-ratio','',0,10,20,0.0001);zoom=Math.round(zoom*100)/100;return{zoom:zoom,devicePxPerCssPx:zoom};};var firefox18=function(){return{zoom:firefox4().zoom,devicePxPerCssPx:devicePixelRatio()};};var opera11=function(){var zoom=window.top.outerWidth/window.top.innerWidth;zoom=Math.round(zoom*100)/100;return{zoom:zoom,devicePxPerCssPx:zoom*devicePixelRatio()};};var mediaQueryBinarySearch=function(property,unit,a,b,maxIter,epsilon){var matchMedia;var head,style,div;if(window.matchMedia){matchMedia=window.matchMedia;}else{head=document.getElementsByTagName('head')[0];style=document.createElement('style');head.appendChild(style);div=document.createElement('div');div.className='mediaQueryBinarySearch';div.style.display='none';document.body.appendChild(div);matchMedia=function(query){style.sheet.insertRule('@media '+query+'{.mediaQueryBinarySearch '+'{text-decoration: underline} }',0);var matched=getComputedStyle(div,null).textDecoration=='underline';style.sheet.deleteRule(0);return{matches:matched};};}
var ratio=binarySearch(a,b,maxIter);if(div){head.removeChild(style);document.body.removeChild(div);}
return ratio;function binarySearch(a,b,maxIter){var mid=(a+b)/2;if(maxIter<=0||b-a<epsilon){return mid;}
var query="("+property+":"+mid+unit+")";if(matchMedia(query).matches){return binarySearch(mid,b,maxIter-1);}else{return binarySearch(a,mid,maxIter-1);}}};var detectFunction=(function(){var func=fallback;if(!isNaN(screen.logicalXDPI)&&!isNaN(screen.systemXDPI)){func=ie8;}
else if(window.navigator.msMaxTouchPoints){func=ie10;}
else if('orientation'in window&&typeof document.body.style.webkitMarquee==='string'){func=webkitMobile;}
else if(typeof document.body.style.webkitMarquee==='string'){func=webkit;}
else if(navigator.userAgent.indexOf('Opera')>=0){func=opera11;}
else if(window.devicePixelRatio){func=firefox18;}
else if(firefox4().zoom>0.001){func=firefox4;}
return func;}());return({zoom:function(){return detectFunction().zoom;},device:function(){return detectFunction().devicePxPerCssPx;}});}));var wpcom_img_zoomer={zoomed:false,timer:null,interval:1000,imgNeedsSizeAtts:function(img){if(img.getAttribute('width')!==null||img.getAttribute('height')!==null)
return false;if(img.width<img.naturalWidth||img.height<img.naturalHeight)
return false;return true;},updateResizeUrl:function(url,width,height){var url_resize=url.match(/resize=([0-9%2C,]+)/);if(url_resize===null||!url_resize[1]){return url;}
var url_sizes=url_resize[1].split(',');var new_resize=null;if(url_sizes[0]!==width){new_resize=width;}
if(url_sizes[1]!==height){if(new_resize!==null){new_resize+='%2C';}
new_resize+=height;}
if(new_resize!==url_resize[1]){new_resize='resize='+new_resize;url=url.replace(url_resize[0],new_resize);}
return url;},init:function(){var t=this;try{t.zoomImages();t.timer=setInterval(function(){t.zoomImages();},t.interval);}
catch(e){}},stop:function(){if(this.timer)
clearInterval(this.timer);},getScale:function(){var scale=detectZoom.device();if(scale<=1.0)scale=1.0;else if(scale<=1.5)scale=1.5;else if(scale<=2.0)scale=2.0;else if(scale<=3.0)scale=3.0;else if(scale<=4.0)scale=4.0;else scale=5.0;return scale;},shouldZoom:function(scale){var t=this;if("innerWidth"in window&&!window.innerWidth)
return false;if(scale==1.0&&t.zoomed==false)
return false;return true;},zoomImages:function(){var t=this;var scale=t.getScale();if(!t.shouldZoom(scale)){return;}
t.zoomed=true;var imgs=document.getElementsByTagName("img");for(var i=0;i<imgs.length;i++){if("complete"in imgs[i]&&!imgs[i].complete)
continue;var imgScale=imgs[i].getAttribute("scale");if(imgScale==scale||imgScale=="0")
continue;var scaleFail=imgs[i].getAttribute("scale-fail");if(scaleFail&&scaleFail<=scale)
continue;if(!(imgs[i].width&&imgs[i].height))
continue;if(!imgScale&&imgs[i].getAttribute("data-lazy-src")&&(imgs[i].getAttribute("data-lazy-src")!==imgs[i].getAttribute("src")))
continue;if(t.scaleImage(imgs[i],scale)){imgs[i].setAttribute("scale",scale);}
else{imgs[i].setAttribute("scale","0");}}},scaleImage:function(img,scale){var t=this;var newSrc=img.src;if(img.parentNode.className.match(/slideshow-slide/))
return false;if(img.src.match(/^https?:\/\/([^\/]*\.)?gravatar\.com\/.+[?&](s|size)=/)){newSrc=img.src.replace(/([?&](s|size)=)(\d+)/,function($0,$1,$2,$3){var originalAtt="originals",originalSize=img.getAttribute(originalAtt);if(originalSize===null){originalSize=$3;img.setAttribute(originalAtt,originalSize);if(t.imgNeedsSizeAtts(img)){img.width=img.width;img.height=img.height;}}
var size=img.clientWidth;var targetSize=Math.ceil(img.clientWidth*scale);targetSize=Math.max(targetSize,originalSize);targetSize=Math.min(targetSize,512);return $1+targetSize;});}
else if(img.src.match(/^https?:\/\/([^\/]+)\.files\.wordpress\.com\/.+[?&][wh]=/)){if(img.src.match(/[?&]crop/))
return false;var changedAttrs={};var matches=img.src.match(/([?&]([wh])=)(\d+)/g);for(var i=0;i<matches.length;i++){var lr=matches[i].split('=');var thisAttr=lr[0].replace(/[?&]/g,'');var thisVal=lr[1];var originalAtt='original'+thisAttr,originalSize=img.getAttribute(originalAtt);if(originalSize===null){originalSize=thisVal;img.setAttribute(originalAtt,originalSize);if(t.imgNeedsSizeAtts(img)){img.width=img.width;img.height=img.height;}}
var size=thisAttr=='w'?img.clientWidth:img.clientHeight;var naturalSize=(thisAttr=='w'?img.naturalWidth:img.naturalHeight);var targetSize=Math.ceil(size*scale);targetSize=Math.max(targetSize,originalSize);if(scale>img.getAttribute("scale")&&targetSize<=naturalSize)
targetSize=thisVal;if(naturalSize<thisVal)
targetSize=thisVal;if(targetSize!=thisVal)
changedAttrs[thisAttr]=targetSize;}
var w=changedAttrs.w||false;var h=changedAttrs.h||false;if(w){newSrc=img.src.replace(/([?&])w=\d+/g,function($0,$1){return $1+'w='+w;});}
if(h){newSrc=newSrc.replace(/([?&])h=\d+/g,function($0,$1){return $1+'h='+h;});}}
else if(img.src.match(/^https?:\/\/([^\/]+\.)*(wordpress|wp)\.com\/mshots\/.+[?&]w=\d+/)){newSrc=img.src.replace(/([?&]w=)(\d+)/,function($0,$1,$2){var originalAtt='originalw',originalSize=img.getAttribute(originalAtt);if(originalSize===null){originalSize=$2;img.setAttribute(originalAtt,originalSize);if(t.imgNeedsSizeAtts(img)){img.width=img.width;img.height=img.height;}}
var size=img.clientWidth;var targetSize=Math.ceil(size*scale);targetSize=Math.max(targetSize,originalSize);if(scale>img.getAttribute("scale")&&targetSize<=img.naturalWidth)
targetSize=$2;if($2!=targetSize)
return $1+targetSize;return $0;});newSrc=newSrc.replace(/([?&]h=)(\d+)/,function($0,$1,$2){if(newSrc==img.src){return $0;}
var originalAtt='originalh',originalSize=img.getAttribute(originalAtt);if(originalSize===null){originalSize=$2;img.setAttribute(originalAtt,originalSize);}
var size=img.clientHeight;var targetSize=Math.ceil(size*scale);targetSize=Math.max(targetSize,originalSize);if(scale>img.getAttribute("scale")&&targetSize<=img.naturalHeight)
targetSize=$2;if($2!=targetSize)
return $1+targetSize;return $0;});}
else if(img.src.match(/^https?:\/\/([^\/.]+\.)*(wp|wordpress)\.com\/imgpress\?(.+)/)){var imgpressSafeFunctions=["zoom","url","h","w","fit","filter","brightness","contrast","colorize","smooth","unsharpmask"];var qs=RegExp.$3.split('&');for(var q in qs){q=qs[q].split('=')[0];if(imgpressSafeFunctions.indexOf(q)==-1){return false;}}
img.width=img.width;img.height=img.height;if(scale==1)
newSrc=img.src.replace(/\?(zoom=[^&]+&)?/,'?');else
newSrc=img.src.replace(/\?(zoom=[^&]+&)?/,'?zoom='+scale+'&');}
else if(img.src.match(/^https?:\/\/([^\/.]+\.)*(wp|wordpress)\.com\/latex\.php\?(latex|zoom)=(.+)/)||img.src.match(/^https?:\/\/i[\d]{1}\.wp\.com\/(.+)/)){img.width=img.width;img.height=img.height;if(scale==1)
newSrc=img.src.replace(/\?(zoom=[^&]+&)?/,'?');else
newSrc=img.src.replace(/\?(zoom=[^&]+&)?/,'?zoom='+scale+'&');if(!img.srcset&&img.src.match(/resize/)){newSrc=t.updateResizeUrl(newSrc,img.width,img.height);img.setAttribute('srcset',newSrc);}}
else if(img.src.match(/^https?:\/\/[^\/]+\/.*[-@]([12])x\.(gif|jpeg|jpg|png)(\?|$)/)){img.width=img.width;img.height=img.height;var currentSize=RegExp.$1,newSize=currentSize;if(scale<=1)
newSize=1;else
newSize=2;if(currentSize!=newSize)
newSrc=img.src.replace(/([-@])[12]x\.(gif|jpeg|jpg|png)(\?|$)/,'$1'+newSize+'x.$2$3');}
else{return false;}
if(newSrc!=img.src){var prevSrc,origSrc=img.getAttribute("src-orig");if(!origSrc){origSrc=img.src;img.setAttribute("src-orig",origSrc);}
prevSrc=img.src;img.onerror=function(){img.src=prevSrc;if(img.getAttribute("scale-fail")<scale)
img.setAttribute("scale-fail",scale);img.onerror=null;};img.src=newSrc;}
return true;}};wpcom_img_zoomer.init();

/* http://s.gravatar.com/js/gprofiles.js */
function hex_md5(a){return binl2hex(core_md5(str2binl(a),a.length*chrsz))}function b64_md5(a){return binl2b64(core_md5(str2binl(a),a.length*chrsz))}function str_md5(a){return binl2str(core_md5(str2binl(a),a.length*chrsz))}function hex_hmac_md5(a,t){return binl2hex(core_hmac_md5(a,t))}function b64_hmac_md5(a,t){return binl2b64(core_hmac_md5(a,t))}function str_hmac_md5(a,t){return binl2str(core_hmac_md5(a,t))}function md5_vm_test(){return"900150983cd24fb0d6963f7d28e17f72"==hex_md5("abc")}function core_md5(a,t){a[t>>5]|=128<<t%32,a[(t+64>>>9<<4)+14]=t;for(var r=1732584193,e=-271733879,i=-1732584194,s=271733878,o=0;o<a.length;o+=16){var n=r,c=e,h=i,l=s;r=md5_ff(r,e,i,s,a[o+0],7,-680876936),s=md5_ff(s,r,e,i,a[o+1],12,-389564586),i=md5_ff(i,s,r,e,a[o+2],17,606105819),e=md5_ff(e,i,s,r,a[o+3],22,-1044525330),r=md5_ff(r,e,i,s,a[o+4],7,-176418897),s=md5_ff(s,r,e,i,a[o+5],12,1200080426),i=md5_ff(i,s,r,e,a[o+6],17,-1473231341),e=md5_ff(e,i,s,r,a[o+7],22,-45705983),r=md5_ff(r,e,i,s,a[o+8],7,1770035416),s=md5_ff(s,r,e,i,a[o+9],12,-1958414417),i=md5_ff(i,s,r,e,a[o+10],17,-42063),e=md5_ff(e,i,s,r,a[o+11],22,-1990404162),r=md5_ff(r,e,i,s,a[o+12],7,1804603682),s=md5_ff(s,r,e,i,a[o+13],12,-40341101),i=md5_ff(i,s,r,e,a[o+14],17,-1502002290),e=md5_ff(e,i,s,r,a[o+15],22,1236535329),r=md5_gg(r,e,i,s,a[o+1],5,-165796510),s=md5_gg(s,r,e,i,a[o+6],9,-1069501632),i=md5_gg(i,s,r,e,a[o+11],14,643717713),e=md5_gg(e,i,s,r,a[o+0],20,-373897302),r=md5_gg(r,e,i,s,a[o+5],5,-701558691),s=md5_gg(s,r,e,i,a[o+10],9,38016083),i=md5_gg(i,s,r,e,a[o+15],14,-660478335),e=md5_gg(e,i,s,r,a[o+4],20,-405537848),r=md5_gg(r,e,i,s,a[o+9],5,568446438),s=md5_gg(s,r,e,i,a[o+14],9,-1019803690),i=md5_gg(i,s,r,e,a[o+3],14,-187363961),e=md5_gg(e,i,s,r,a[o+8],20,1163531501),r=md5_gg(r,e,i,s,a[o+13],5,-1444681467),s=md5_gg(s,r,e,i,a[o+2],9,-51403784),i=md5_gg(i,s,r,e,a[o+7],14,1735328473),e=md5_gg(e,i,s,r,a[o+12],20,-1926607734),r=md5_hh(r,e,i,s,a[o+5],4,-378558),s=md5_hh(s,r,e,i,a[o+8],11,-2022574463),i=md5_hh(i,s,r,e,a[o+11],16,1839030562),e=md5_hh(e,i,s,r,a[o+14],23,-35309556),r=md5_hh(r,e,i,s,a[o+1],4,-1530992060),s=md5_hh(s,r,e,i,a[o+4],11,1272893353),i=md5_hh(i,s,r,e,a[o+7],16,-155497632),e=md5_hh(e,i,s,r,a[o+10],23,-1094730640),r=md5_hh(r,e,i,s,a[o+13],4,681279174),s=md5_hh(s,r,e,i,a[o+0],11,-358537222),i=md5_hh(i,s,r,e,a[o+3],16,-722521979),e=md5_hh(e,i,s,r,a[o+6],23,76029189),r=md5_hh(r,e,i,s,a[o+9],4,-640364487),s=md5_hh(s,r,e,i,a[o+12],11,-421815835),i=md5_hh(i,s,r,e,a[o+15],16,530742520),e=md5_hh(e,i,s,r,a[o+2],23,-995338651),r=md5_ii(r,e,i,s,a[o+0],6,-198630844),s=md5_ii(s,r,e,i,a[o+7],10,1126891415),i=md5_ii(i,s,r,e,a[o+14],15,-1416354905),e=md5_ii(e,i,s,r,a[o+5],21,-57434055),r=md5_ii(r,e,i,s,a[o+12],6,1700485571),s=md5_ii(s,r,e,i,a[o+3],10,-1894986606),i=md5_ii(i,s,r,e,a[o+10],15,-1051523),e=md5_ii(e,i,s,r,a[o+1],21,-2054922799),r=md5_ii(r,e,i,s,a[o+8],6,1873313359),s=md5_ii(s,r,e,i,a[o+15],10,-30611744),i=md5_ii(i,s,r,e,a[o+6],15,-1560198380),e=md5_ii(e,i,s,r,a[o+13],21,1309151649),r=md5_ii(r,e,i,s,a[o+4],6,-145523070),s=md5_ii(s,r,e,i,a[o+11],10,-1120210379),i=md5_ii(i,s,r,e,a[o+2],15,718787259),e=md5_ii(e,i,s,r,a[o+9],21,-343485551),r=safe_add(r,n),e=safe_add(e,c),i=safe_add(i,h),s=safe_add(s,l)}return Array(r,e,i,s)}function md5_cmn(a,t,r,e,i,s){return safe_add(bit_rol(safe_add(safe_add(t,a),safe_add(e,s)),i),r)}function md5_ff(a,t,r,e,i,s,o){return md5_cmn(t&r|~t&e,a,t,i,s,o)}function md5_gg(a,t,r,e,i,s,o){return md5_cmn(t&e|r&~e,a,t,i,s,o)}function md5_hh(a,t,r,e,i,s,o){return md5_cmn(t^r^e,a,t,i,s,o)}function md5_ii(a,t,r,e,i,s,o){return md5_cmn(r^(t|~e),a,t,i,s,o)}function core_hmac_md5(a,t){var r=str2binl(a);r.length>16&&(r=core_md5(r,a.length*chrsz));for(var e=Array(16),i=Array(16),s=0;16>s;s++)e[s]=909522486^r[s],i[s]=1549556828^r[s];var o=core_md5(e.concat(str2binl(t)),512+t.length*chrsz);return core_md5(i.concat(o),640)}function safe_add(a,t){var r=(65535&a)+(65535&t),e=(a>>16)+(t>>16)+(r>>16);return e<<16|65535&r}function bit_rol(a,t){return a<<t|a>>>32-t}function str2binl(a){for(var t=Array(),r=(1<<chrsz)-1,e=0;e<a.length*chrsz;e+=chrsz)t[e>>5]|=(a.charCodeAt(e/chrsz)&r)<<e%32;return t}function binl2str(a){for(var t="",r=(1<<chrsz)-1,e=0;e<32*a.length;e+=chrsz)t+=String.fromCharCode(a[e>>5]>>>e%32&r);return t}function binl2hex(a){for(var t=hexcase?"0123456789ABCDEF":"0123456789abcdef",r="",e=0;e<4*a.length;e++)r+=t.charAt(a[e>>2]>>e%4*8+4&15)+t.charAt(a[e>>2]>>e%4*8&15);return r}function binl2b64(a){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r="",e=0;e<4*a.length;e+=3)for(var i=(a[e>>2]>>8*(e%4)&255)<<16|(a[e+1>>2]>>8*((e+1)%4)&255)<<8|a[e+2>>2]>>8*((e+2)%4)&255,s=0;4>s;s++)r+=8*e+6*s>32*a.length?b64pad:t.charAt(i>>6*(3-s)&63);return r}"undefined"==typeof console&&(console={log:function(a){},debug:function(a){}});var Gravatar={profile_stack:{},profile_map:{},overTimeout:!1,outTimeout:!1,stopOver:!1,active_grav:!1,active_hash:!1,active_id:!1,active_grav_clone:!1,profile_cb:null,stats_queue:[],throbber:null,has_bg:!1,disabled:!1,url_prefix:"http://en",disable:function(){Gravatar.disabled=!0,Gravatar.hide_card();var a=new Date(2100,1,1,1,1,1);Gravatar.stat("disable"),-1==window.location.host.search(/wordpress.com/i)?document.cookie="nohovercard=1; expires="+a.toUTCString()+";":document.cookie="nohovercard=1; expires="+a.toUTCString()+"; domain=.wordpress.com; path=/"},mouseOut:function(a){a.stopImmediatePropagation(),Gravatar.stopOver=!0,Gravatar.outTimeout=setTimeout(function(){Gravatar.hide_card()},300)},init:function(a,t){var r,e,i=document.cookie.split(";");for(r=0;r<i.length;r++){for(e=i[r];" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf("nohovercard=1"))return}"https:"==window.location.protocol&&(this.url_prefix="https://secure"),this.attach_profiles(a,t),this.add_card_css(),jQuery("body").on("mouseenter.gravatar mouseleave.gravatar","img.grav-hashed",function(a){if(!Gravatar.disabled){if(a.preventDefault(),a.stopPropagation(),"mouseleave"==a.type||"mouseout"==a.type)return Gravatar.mouseOut.call(this,a);Gravatar.stopOver=!1,Gravatar.active_id=jQuery(this).attr("id"),Gravatar.active_hash=Gravatar.active_id.split("-")[1],Gravatar.untilt_gravatar(),clearTimeout(Gravatar.overTimeout),!1!==Gravatar.profile_map["g"+Gravatar.active_hash]&&(Gravatar.stat("hover"),clearTimeout(Gravatar.outTimeout),Gravatar.tilt_gravatar(),Gravatar.fetch_profile_by_hash(Gravatar.active_hash,Gravatar.active_id),Gravatar.overTimeout=setTimeout(function(){Gravatar.show_card()},600))}}),jQuery("body").on("mouseenter.gravatar mouseleave.gravatar","div.gcard, img.grav-clone",function(a){Gravatar.disabled||(a.preventDefault(),a.stopPropagation(),"mouseenter"==a.type||"mouseover"==a.type?(Gravatar.stopOver=!1,clearTimeout(Gravatar.outTimeout)):Gravatar.mouseOut.call(this,a))}),jQuery(window).bind("scroll",function(){Gravatar.active_hash.length&&Gravatar.hide_card()})},attach_profiles:function(a,t){setInterval(Gravatar.send_stats,3e3),a="undefined"==typeof a?"body":a,t&&"string"==typeof t&&jQuery(t).addClass("no-grav"),jQuery(a+' img[src*="gravatar.com/avatar"]').not(".no-grav, .no-grav img").each(function(){if(hash=Gravatar.extract_hash(this),uniq=0,jQuery("#grav-"+hash+"-"+uniq).length)for(;jQuery("#grav-"+hash+"-"+uniq).length;)uniq++;var a=jQuery(this).attr("id","grav-"+hash+"-"+uniq).attr("title","").removeAttr("title");a.parent("a").size()&&a.parent("a").attr("title","").removeAttr("title"),a.addClass("grav-hashed"),(a.parents("#comments, .comments, #commentlist, .commentlist, .grav-hijack").size()||!a.parents("a:first").size())&&a.addClass("grav-hijack")})},show_card:function(){if(!Gravatar.stopOver){if(dom_id=this.profile_map["g"+Gravatar.active_hash],jQuery(".gcard").hide(),"fetching"==this.profile_stack["g"+Gravatar.active_hash])return Gravatar.show_throbber(),this.listen(Gravatar.active_hash,"show_card"),void Gravatar.stat("wait");if("undefined"==typeof this.profile_stack["g"+Gravatar.active_hash])return Gravatar.show_throbber(),this.listen(Gravatar.active_hash,"show_card"),void this.fetch_profile_by_hash(Gravatar.active_hash,dom_id);Gravatar.stat("show"),Gravatar.hide_throbber(),jQuery("#profile-"+this.active_hash).length||this.build_card(this.active_hash,this.profile_stack["g"+this.active_hash]),this.render_card(this.active_grav,"profile-"+this.active_hash)}},hide_card:function(){clearTimeout(Gravatar.overTimeout),this.untilt_gravatar(),jQuery("div.gcard").filter("#profile-"+this.active_hash).fadeOut(120,function(){jQuery("img.grav-large").stop().remove()}).end().not("#profile-"+this.active_hash).hide()},render_card:function(a,t){var r=jQuery("#"+t).stop(),e=a,i=e.offset();if(null!=i){var s=e.width(),o=e.height(),n=5+.4*s,c=r.width(),h=r.height();c==jQuery(window).width()&&(c=400,h=200);var l=i.left-17,d=i.top-7,f="pos-right";i.left+s+n+c>jQuery(window).width()+jQuery(window).scrollLeft()&&(l=i.left-c+s+17,f="pos-left");var v=.25*o;jQuery("#"+t).removeClass("pos-right pos-left").addClass(f).css({top:d-v+"px",left:l+"px"});var u=o/2;u>h&&(u=h/2),u>h/2-6&&(u=h/2-6),u>53&&(u=53),this.has_bg&&(u-=8),0>u&&(u=0);var g={height:2*o+v+"px"};"pos-right"==f?(g.right="auto",g.left="-7px",g["background-position"]="0px "+u+"px"):(g.right="-10px",g.left="auto",g["background-position"]="0px "+u+"px"),jQuery("#"+t+" .grav-cardarrow").css(g)}r.stop().css({opacity:0}).show().animate({opacity:1},150,"linear",function(){jQuery(this).css({opacity:"auto"}),jQuery(this).stop()})},build_card:function(a,t){Object.size=function(a){var t,r=0;for(t in a)a.hasOwnProperty(t)&&r++;return r},GProfile.init(t);var r=GProfile.get("urls"),e=(GProfile.get("photos"),GProfile.get("accounts")),i=100;i+=Object.size(r)>3?90:10+20*Object.size(r),Object.size(e)>0&&(i+=30);var s=GProfile.get("aboutMe");s=s.replace(/<[^>]+>/gi,""),s=s.toString().substr(0,i),i==s.length&&(s+='<a href="'+GProfile.get("profileUrl")+'" target="_blank">&#8230;</a>');var o="grav-inner";Gravatar.my_hash&&a==Gravatar.my_hash&&(o+=" grav-is-user",s.length||(s="<p>Want a better profile? <a class='grav-edit-profile' href='http://gravatar.com/profiles/edit/?noclose' target='_blank'>Click here</a>.</p>")),s.length&&(o+=" gcard-about"),name=GProfile.get("displayName"),name.length||(name=GProfile.get("preferredUsername"));var n='<div id="profile-'+a+'" class="gcard grofile"> 						<div class="grav-inner"> 							<div class="grav-grav"> 								<a href="'+GProfile.get("profileUrl")+'" target="_blank"> 									<img src="'+GProfile.get("thumbnailUrl")+'?s=100&r=pg&d=mm" width="100" height="100" /> 								</a> 							</div> 							<div class="grav-info"> 								<h4><a href="'+GProfile.get("profileUrl")+'" target="_blank">'+name+'</a></h4> 								<p class="grav-loc">'+GProfile.get("currentLocation")+'</p> 								<p class="grav-about">'+s+'</p> 								<div class="grav-view-complete-button"> 									<a href="'+GProfile.get("profileUrl")+'" target="_blank" class="grav-view-complete">View Complete Profile</a> 								</div> 								<p class="grav-disable"><a href="#" onclick="Gravatar.disable(); return false">Turn off hovercards</a></p> 							</div> 							<div style="clear:both"></div> 						</div> 						<div class="grav-cardarrow"></div> 						<div class="grav-tag"><a href="http://gravatar.com/" title="Powered by Gravatar.com" target="_blank">&nbsp;</a></div> 					</div>';jQuery("body").append(jQuery(n)),jQuery("#profile-"+a+" .grav-inner").addClass(o),this.has_bg=!1;var c=GProfile.get("profileBackground");if(Object.size(c)){this.has_bg=!0;var h={padding:"8px 0"};c.color&&(h["background-color"]=c.color),c.url&&(h["background-image"]="url("+c.url+")"),c.position&&(h["background-position"]=c.position),c.repeat&&(h["background-repeat"]=c.repeat),jQuery("#profile-"+a).css(h),jQuery("#profile-"+a+" .grav-tag").css("top","8px")}jQuery("#profile-"+a+" .gcard-links").length||jQuery("#profile-"+a+" .gcard-services").length||jQuery("#profile-"+a+" .grav-rightcol").css({width:"auto"}),jQuery("#profile-"+a+" .gcard-about").length||jQuery("#profile-"+a+" .grav-leftcol").css({width:"auto"}),jQuery.isFunction(Gravatar.profile_cb)&&Gravatar.loaded_js(a,"profile-"+a),jQuery("#profile-"+a+" a.grav-extra-comments").click(function(a){return Gravatar.stat("click_comment",a)}),jQuery("#profile-"+a+" a.grav-extra-likes").click(function(a){return Gravatar.stat("click_like",a)}),jQuery("#profile-"+a+" .grav-links a").click(function(a){return Gravatar.stat("click_link",a)}),jQuery("#profile-"+a+" .grav-services a").click(function(a){return Gravatar.stat("click_service",a)}),jQuery("#profile-"+a+" h4 a, #profile-"+a+" .grav-view-complete, #profile-"+a+" .grav-grav a").click(function(a){return Gravatar.stat("to_profile",a)}),jQuery("#profile-"+a+" .grav-tag a").click(function(a){return 3==a.which||2==a.button||a.altKey||a.metaKey||a.ctrlKey?(a.preventDefault(),a.stopImmediatePropagation(),Gravatar.stat("egg"),Gravatar.whee()):Gravatar.stat("to_gravatar",a)}).bind("contextmenu",function(a){return a.preventDefault(),a.stopImmediatePropagation(),Gravatar.stat("egg"),Gravatar.whee()}),jQuery("#profile-"+a+" a.grav-edit-profile").click(function(a){return Gravatar.stat("click_edit_profile",a)})},tilt_gravatar:function(){if(this.active_grav=jQuery("img#"+this.active_id),!jQuery("img#grav-clone-"+this.active_hash).length){this.active_grav_clone=this.active_grav.clone().attr("id","grav-clone-"+this.active_hash).addClass("grav-clone");var a=this.active_grav.offset().top+parseInt(this.active_grav.css("padding-top"),10),t=this.active_grav.offset().left+parseInt(this.active_grav.css("padding-left"),10),r={"-webkit-box-shadow":"0 0 4px rgba(0,0,0,.4)","-moz-box-shadow":"0 0 4px rgba(0,0,0,.4)","box-shadow":"0 0 4px rgba(0,0,0,.4)","border-width":"2px 2px "+this.active_grav.height()/5+"px 2px","border-color":"#fff","border-style":"solid",padding:"0px",margin:"-2px 0 0 -2px"};if(this.active_grav.hasClass("grav-hijack"))var e='<a href="http://gravatar.com/'+this.active_hash+'" class="grav-clone-a" target="_blank"></a>';else var e=this.active_grav.parents("a:first").clone(!0).empty();var i=this.active_grav_clone.css(r).wrap(e).parent().css({position:"absolute",top:a+"px",left:t+"px","z-index":15,border:"none","text-decoration":"none"});jQuery("body").append(i),this.active_grav_clone.removeClass("grav-hashed")}},untilt_gravatar:function(){jQuery("img.grav-clone, a.grav-clone-a").remove(),Gravatar.hide_throbber()},show_throbber:function(){Gravatar.throbber||(Gravatar.throbber=jQuery('<div id="grav-throbber" style="position: absolute; z-index: 16"><img src="'+this.url_prefix+'.gravatar.com/images/throbber.gif" alt="." width="15" height="15" /></div>')),jQuery("body").append(Gravatar.throbber);var a=jQuery("#"+Gravatar.active_id).offset();Gravatar.throbber.css({top:a.top+2+"px",left:a.left+1+"px"})},hide_throbber:function(){Gravatar.throbber&&Gravatar.throbber.remove()},fetch_profile_by_email:function(a){return this.fetch_profile_by_hash(this.md5(a.toString().toLowerCase()))},fetch_profile_by_hash:function(a,t){return this.profile_map["g"+a]=t,this.profile_stack["g"+a]&&"object"==typeof this.profile_stack["g"+a]?this.profile_stack["g"+a]:(this.profile_stack["g"+a]="fetching",Gravatar.stat("fetch"),void this.load_js(this.url_prefix+".gravatar.com/"+a+".json?callback=Gravatar.fetch_profile_callback",function(){Gravatar.fetch_profile_error(a,t)}))},fetch_profile_callback:function(a){a&&"object"==typeof a&&(this.profile_stack["g"+a.entry[0].hash]=a,this.notify(a.entry[0].hash))},fetch_profile_error:function(a,t){Gravatar.stat("profile_404"),Gravatar.profile_map["g"+a]=!1;var r=jQuery("#"+t);r.parent('a[href="http://gravatar.com/'+a+'"]').size()&&r.unwrap(),t==Gravatar.active_id&&Gravatar.hide_card()},listen:function(t,r){for(this.notify_stack||(this.notify_stack={}),t="g"+t,this.notify_stack[t]||(this.notify_stack[t]=[]),a=0;a<this.notify_stack[t].length;a++)if(r==this.notify_stack[t][a])return;this.notify_stack[t][this.notify_stack[t].length]=r},notify:function(t){for(this.notify_stack||(this.notify_stack={}),t="g"+t,this.notify_stack[t]||(this.notify_stack[t]=[]),a=0;a<this.notify_stack[t].length;a++)0!=this.notify_stack[t][a]&&"undefined"!=typeof this.notify_stack[t][a]&&(Gravatar[this.notify_stack[t][a]](t.substr(1)),this.notify_stack[t][a]=!1)},extract_hash:function(a){if(hash=/gravatar.com\/avatar\/([0-9a-f]{32})/.exec(jQuery(a).attr("src")),null!=hash&&"object"==typeof hash&&2==hash.length)hash=hash[1];else{if(hash=/gravatar_id\=([0-9a-f]{32})/.exec(jQuery(a).attr("src")),null===hash||"object"!=typeof hash||2!=hash.length)return!1;hash=hash[1]}return hash},load_js:function(a,t){if(this.loaded_scripts||(this.loaded_scripts=[]),!this.loaded_scripts[a]){this.loaded_scripts[a]=!0;var r=document.createElement("script");r.src=a,r.type="text/javascript",jQuery.isFunction(t)&&(r.onerror=t),document.getElementsByTagName("head")[0].appendChild(r)}},loaded_js:function(a,t){Gravatar.profile_cb(a,t)},add_card_css:function(){if(!jQuery("#gravatar-card-css").length){var a,t=jQuery('script[src*="/js/gprofiles."]').attr("src")||!1,r=!1;if(t?(a=t.replace(/\/js\/gprofiles(?:\.dev)?\.js.*$/,""),r=t.split("?")[1]||!1):a="//s.gravatar.com",!r)var e=new Date,i=new Date(e.getFullYear(),0,1),r=Math.ceil(((e-i)/864e5+i.getDay()+1)/7),r="ver="+e.getFullYear().toString()+r.toString();a=a.replace(/^(https?\:)?\/\//,""),a=window.location.protocol+"//"+a,new_css="<link rel='stylesheet' type='text/css' id='gravatar-card-css' href='"+a+"/css/hovercard.css?"+r+"' />",jQuery("#gravatar-card-services-css").length||(new_css+="<link rel='stylesheet' type='text/css' id='gravatar-card-services-css' href='"+a+"/css/services.css?"+r+"' />"),jQuery("head").append(new_css)}},md5:function(a){return hex_md5(a)},autofill:function(a,t){a.length&&-1!=a.indexOf("@")&&(this.autofill_map=t,hash=this.md5(a.toString().toLowerCase()),"undefined"==typeof this.profile_stack["g"+hash]?(this.listen(hash,"autofill_data"),this.fetch_profile_by_hash(hash)):this.autofill_data(hash))},autofill_data:function(a){GProfile.init(this.profile_stack["g"+a]);for(var t in this.autofill_map)switch(t){case"url":link=GProfile.get("urls"),url="undefined"!=typeof link[0]?link[0].value:GProfile.get("profileUrl"),jQuery("#"+this.autofill_map[t]).val(url);break;case"urls":for(links=GProfile.get("urls"),links_str="",l=0;l<links.length;l++)links_str+=links[l].value+"\n";jQuery("#"+this.autofill_map[t]).val(links_str);break;default:if(parts=t.split(/\./),parts[1]){switch(val=GProfile.get(t),parts[0]){case"ims":case"phoneNumbers":val=val.value;break;case"emails":val=val[0].value;case"accounts":val=val.url}jQuery("#"+this.autofill_map[t]).val(val)}else jQuery("#"+this.autofill_map[t]).val(GProfile.get(t))}},whee:function(){if(!Gravatar.whee.didWhee){Gravatar.whee.didWhee=!0,document.styleSheets[0].addRule?document.styleSheets[0].addRule(".grav-tag a","background-position: 22px 100% !important"):jQuery(".grav-tag a").css("background-position","22px 100%"),jQuery('img[src*="gravatar.com/"]').addClass("grav-whee").css({"-webkit-box-shadow":"1px 1px 3px #aaa","-moz-box-shadow":"1px 1px 3px #aaa","box-shadow":"1px 1px 3px #aaa",border:"2px white solid"});var a=0;return setInterval(function(){jQuery(".grav-whee").css({"-webkit-transform":"rotate(-"+a+"deg) scale(1.3)","-moz-transform":"rotate(-"+a+"deg) scale(1.3)",transform:"rotate(-"+a+"deg) scale(1.3)"}),a++,360==a&&(a=0)},6),!1}},stat:function(a,t){if(Gravatar.stats_queue.push(a),t){var r=t.metaKey||"_blank"==jQuery(t.currentTarget).attr("target");return Gravatar.send_stats(function(){r||(document.location=t.currentTarget.href)}),r}Gravatar.stats_queue.length>10&&Gravatar.send_stats()},send_stats:function(a){if(document.images){var t=Gravatar.stats_queue;if(t.length){var r=new Date;Gravatar.stats_queue=[];var e="https://pixel.wp.com/g.gif?v=wpcom2&x_grav-hover="+t.join(",")+"&rand="+Math.random().toString()+"-"+r.getTime(),i=new Image(1,1);jQuery.isFunction(a)&&(i.onload=a),i.src=e}}}},GProfile={data:{},init:function(a){return"fetching"==a?!1:"undefined"==typeof a.entry[0]?!1:void(GProfile.data=a.entry[0])},get:function(a){if(-1!=a.indexOf(".")){if(parts=a.split(/\./),GProfile.data[parts[0]]){if(GProfile.data[parts[0]][parts[1]])return GProfile.data[parts[0]][parts[1]];for(i=0,s=GProfile.data[parts[0]].length;i<s;i++)if(GProfile.data[parts[0]][i].type&&parts[1]==GProfile.data[parts[0]][i].type||GProfile.data[parts[0]][i].shortname&&parts[1]==GProfile.data[parts[0]][i].shortname||GProfile.data[parts[0]][i].primary&&"primary"==parts[1])return GProfile.data[parts[0]][i]}return""}return GProfile.data[a]?GProfile.data[a]:"url"==a&&GProfile.data.urls.length?GProfile.data.urls[0].value:""}},hexcase=0,b64pad="",chrsz=8;
var WPGroHo = {"my_hash":""};

/* http://allbs.co.uk/wp-content/plugins/jetpack/modules/wpgroho.js */
/* global WPGroHo:true, Gravatar */
WPGroHo = jQuery.extend( {
	my_hash: '',
	data: {},
	renderers: {},
	syncProfileData: function( hash, id ) {
		if ( !WPGroHo.data[hash] ) {
			WPGroHo.data[hash] = {};
			jQuery( 'div.grofile-hash-map-' + hash + ' span' ).each( function() {
				WPGroHo.data[hash][this.className] = jQuery( this ).text();
			} );
		}

		WPGroHo.appendProfileData( WPGroHo.data[hash], hash, id );
	},
	appendProfileData: function( data, hash, id ) {
		for ( var key in data ) {
			if ( jQuery.isFunction( WPGroHo.renderers[key] ) ) {
				return WPGroHo.renderers[key]( data[key], hash, id, key );
			}

			jQuery( '#' + id ).find( 'h4' ).after( jQuery( '<p class="grav-extra ' + key + '" />' ).html( data[key] ) );
		}
	}
}, WPGroHo );

jQuery( document ).ready( function() {
	if ( 'undefined' === typeof Gravatar ) {
		return;
	}

	Gravatar.profile_cb = function( h, d ) {
		WPGroHo.syncProfileData( h, d );
	};

	Gravatar.my_hash = WPGroHo.my_hash;
	Gravatar.init( 'body', '#wpadminbar' );
} );

var themifyScript = {"lightbox":{"lightboxSelector":".lightbox","lightboxOn":true,"lightboxContentImages":true,"lightboxContentImagesSelector":".post-content a[href$=jpg],.page-content a[href$=jpg],.post-content a[href$=gif],.page-content a[href$=gif],.post-content a[href$=png],.page-content a[href$=png],.post-content a[href$=JPG],.page-content a[href$=JPG],.post-content a[href$=GIF],.page-content a[href$=GIF],.post-content a[href$=PNG],.page-content a[href$=PNG],.post-content a[href$=jpeg],.page-content a[href$=jpeg],.post-content a[href$=JPEG],.page-content a[href$=JPEG]","theme":"pp_default","social_tools":false,"allow_resize":true,"show_title":false,"overlay_gallery":false,"screenWidthNoLightbox":600,"deeplinking":false,"contentImagesAreas":".post, .type-page, .type-highlight, .type-slider","gallerySelector":".gallery-icon > a[href$=jpg],.gallery-icon > a[href$=gif],.gallery-icon > a[href$=png],.gallery-icon > a[href$=JPG],.gallery-icon > a[href$=GIF],.gallery-icon > a[href$=PNG],.gallery-icon > a[href$=jpeg],.gallery-icon > a[href$=JPEG]","lightboxGalleryOn":true},"lightboxContext":"#pagewrap","isTouch":"false"};

/* http://allbs.co.uk/wp-content/themes/thememin/js/themify.script.js */
;// Themify Theme Scripts - http://themify.me/

jQuery(document).ready(function($){
	
	/////////////////////////////////////////////
	// Scroll to top 							
	/////////////////////////////////////////////
	$('.back-top a').click(function () {
            $('body,html').animate({scrollTop: 0}, 800);
            return false;
	});

	/////////////////////////////////////////////
	// Toggle main nav on mobile
	/////////////////////////////////////////////
	$("#menu-icon").click(function(){
		$("#main-nav").fadeToggle();
	});

	if( typeof jQuery.fn.themifyDropdown == 'function' ) {
            $( '#main-nav' ).themifyDropdown();
	}

});


/* /wp-includes/js/comment-reply.min.js */
var addComment={moveForm:function(a,b,c,d){var e,f,g,h,i=this,j=i.I(a),k=i.I(c),l=i.I("cancel-comment-reply-link"),m=i.I("comment_parent"),n=i.I("comment_post_ID"),o=k.getElementsByTagName("form")[0];if(j&&k&&l&&m&&o){i.respondId=c,d=d||!1,i.I("wp-temp-form-div")||(e=document.createElement("div"),e.id="wp-temp-form-div",e.style.display="none",k.parentNode.insertBefore(e,k)),j.parentNode.insertBefore(k,j.nextSibling),n&&d&&(n.value=d),m.value=b,l.style.display="",l.onclick=function(){var a=addComment,b=a.I("wp-temp-form-div"),c=a.I(a.respondId);if(b&&c)return a.I("comment_parent").value="0",b.parentNode.insertBefore(c,b),b.parentNode.removeChild(b),this.style.display="none",this.onclick=null,!1};try{for(var p=0;p<o.elements.length;p++)if(f=o.elements[p],h=!1,"getComputedStyle"in window?g=window.getComputedStyle(f):document.documentElement.currentStyle&&(g=f.currentStyle),(f.offsetWidth<=0&&f.offsetHeight<=0||"hidden"===g.visibility)&&(h=!0),"hidden"!==f.type&&!f.disabled&&!h){f.focus();break}}catch(q){}return!1}},I:function(a){return document.getElementById(a)}};

/* /wp-includes/js/wp-embed.min.js */
!function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\./),i=b.querySelectorAll("iframe.wp-embedded-content"),j=b.querySelectorAll("blockquote.wp-embedded-content");for(c=0;c<j.length;c++)j[c].style.display="none";for(c=0;c<i.length;c++)if(d=i[c],d.style.display="",!d.getAttribute("data-secret")){if(f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f),g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}else;}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'),k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.style.display="","height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(200>~~g)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);
var sharing_js_options = {"lang":"en","counts":"1"};

/* http://allbs.co.uk/wp-content/plugins/jetpack/modules/sharedaddy/sharing.js */
/* global WPCOM_sharing_counts, grecaptcha */
var sharing_js_options;
if ( sharing_js_options && sharing_js_options.counts ) {
	var WPCOMSharing = {
		done_urls : [],
		get_counts : function() {
			var url, requests, id, service, service_request;

			if ( 'undefined' === typeof WPCOM_sharing_counts ) {
				return;
			}

			for ( url in WPCOM_sharing_counts ) {
				id = WPCOM_sharing_counts[ url ];

				if ( 'undefined' !== typeof WPCOMSharing.done_urls[ id ] ) {
					continue;
				}

				requests = {
					// LinkedIn actually gets the share count for both the http and https version automatically -- so we don't need to do extra magic
					linkedin: [
							'https://www.linkedin.com/countserv/count/share?format=jsonp&callback=WPCOMSharing.update_linkedin_count&url=' +
							encodeURIComponent( url )
					],
					// Pinterest, like LinkedIn, handles share counts for both http and https
					pinterest: [
						window.location.protocol +
							'//api.pinterest.com/v1/urls/count.json?callback=WPCOMSharing.update_pinterest_count&url=' +
							encodeURIComponent( url )
					],
					// Facebook protocol summing has been shown to falsely double counts, so we only request the current URL
					facebook: [
						window.location.protocol +
							'//graph.facebook.com/?callback=WPCOMSharing.update_facebook_count&ids=' +
							encodeURIComponent( url )
					]
				};

				for ( service in requests ) {
					if ( ! jQuery( 'a[data-shared=sharing-' + service + '-' + id  + ']' ).length ) {
						continue;
					}

					while ( ( service_request = requests[ service ].pop() ) ) {
						jQuery.getScript( service_request );
					}

					WPCOMSharing.bump_sharing_count_stat( service );
				}

				WPCOMSharing.done_urls[ id ] = true;
			}
		},

		// get the version of the url that was stored in the dom (sharing-$service-URL)
		get_permalink: function( url ) {
			if ( 'https:' === window.location.protocol ) {
				url = url.replace( /^http:\/\//i, 'https://' );
			} else {
				url = url.replace( /^https:\/\//i, 'http://' );
			}

			return url;
		},
		update_facebook_count: function( data ) {
			var url, permalink;

			if ( ! data ) {
				return;
			}

			for ( url in data ) {
				if ( ! data.hasOwnProperty( url ) || ! data[ url ].shares ) {
					continue;
				}

				permalink = WPCOMSharing.get_permalink( url );

				if ( ! ( permalink in WPCOM_sharing_counts ) ) {
					continue;
				}

				WPCOMSharing.inject_share_count( 'sharing-facebook-' + WPCOM_sharing_counts[ permalink ], data[ url ].shares );
			}
		},
		update_linkedin_count : function( data ) {
			if ( 'undefined' !== typeof data.count && ( data.count * 1 ) > 0 ) {
				WPCOMSharing.inject_share_count( 'sharing-linkedin-' + WPCOM_sharing_counts[ data.url ], data.count );
			}
		},
		update_pinterest_count : function( data ) {
			if ( 'undefined' !== typeof data.count && ( data.count * 1 ) > 0 ) {
				WPCOMSharing.inject_share_count( 'sharing-pinterest-' + WPCOM_sharing_counts[ data.url ], data.count );
			}
		},
		inject_share_count : function( id, count ) {
			var $share = jQuery( 'a[data-shared=' + id + '] > span');
			$share.find( '.share-count' ).remove();
			$share.append( '<span class="share-count">' + WPCOMSharing.format_count( count ) + '</span>' );
		},
		format_count : function( count ) {
			if ( count < 1000 ) {
				return count;
			}
			if ( count >= 1000 && count < 10000 ) {
				return String( count ).substring( 0, 1 ) + 'K+';
			}
			return '10K+';
		},
		bump_sharing_count_stat: function( service ) {
			new Image().src = document.location.protocol + '//pixel.wp.com/g.gif?v=wpcom-no-pv&x_sharing-count-request=' + service + '&r=' + Math.random();
		}
	};
}

(function($){
	var $body, $sharing_email;

	$.fn.extend( {
		share_is_email: function() {
			return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test( this.val() );
		}
	} );

	$body = $( document.body ).on( 'post-load', WPCOMSharing_do );
	$( document ).on( 'ready', function() {
		$sharing_email = $( '#sharing_email' );
		$body.append( $sharing_email );
		WPCOMSharing_do();
	} );

	function WPCOMSharing_do() {
		var $more_sharing_buttons;
		if ( 'undefined' !== typeof WPCOMSharing ) {
			WPCOMSharing.get_counts();
		}
		$more_sharing_buttons = $( '.sharedaddy a.sharing-anchor' );

		$more_sharing_buttons.click( function() {
			return false;
		} );

		$( '.sharedaddy a' ).each( function() {
			if ( $( this ).attr( 'href' ) && $( this ).attr( 'href' ).indexOf( 'share=' ) !== -1 ) {
				$( this ).attr( 'href', $( this ).attr( 'href' ) + '&nb=1' );
			}
		} );

		// Show hidden buttons

		// Touchscreen device: use click.
		// Non-touchscreen device: use click if not already appearing due to a hover event
		$more_sharing_buttons.on( 'click', function() {
			var $more_sharing_button = $( this ),
				$more_sharing_pane = $more_sharing_button.parents( 'div:first' ).find( '.inner' );

			if ( $more_sharing_pane.is( ':animated' ) ) {
				// We're in the middle of some other event's animation
				return;
			}

			if ( true === $more_sharing_pane.data( 'justSlid' ) ) {
				// We just finished some other event's animation - don't process click event so that slow-to-react-clickers don't get confused
				return;
			}

			$sharing_email.slideUp( 200 );

			$more_sharing_pane.css( {
				left: $more_sharing_button.position().left + 'px',
				top: $more_sharing_button.position().top + $more_sharing_button.height() + 3 + 'px'
			} ).slideToggle( 200 );
		} );

		if ( document.ontouchstart === undefined ) {
			// Non-touchscreen device: use hover/mouseout with delay
			$more_sharing_buttons.hover( function() {
				var $more_sharing_button = $( this ),
					$more_sharing_pane = $more_sharing_button.parents( 'div:first' ).find( '.inner' ),
					timer;

				if ( ! $more_sharing_pane.is( ':animated' ) ) {
					// Create a timer to make the area appear if the mouse hovers for a period
					timer = setTimeout( function() {
						var handler_item_leave, handler_item_enter, handler_original_leave, handler_original_enter, close_it;

						$sharing_email.slideUp( 200 );

						$more_sharing_pane.data( 'justSlid', true );
						$more_sharing_pane.css( {
							left: $more_sharing_button.position().left + 'px',
							top: $more_sharing_button.position().top + $more_sharing_button.height() + 3 + 'px'
						} ).slideDown( 200, function() {
							// Mark the item as have being appeared by the hover
							$more_sharing_button.data( 'hasoriginal', true ).data( 'hasitem', false );

							setTimeout( function() {
								$more_sharing_pane.data( 'justSlid', false );
							}, 300 );

							if ( $more_sharing_pane.find( '.share-google-plus-1' ).size() ) {
								// The pane needs to stay open for the Google+ Button
								return;
							}

							$more_sharing_pane.mouseleave( handler_item_leave ).mouseenter( handler_item_enter );
							$more_sharing_button.mouseleave( handler_original_leave ).mouseenter( handler_original_enter );
						} );

						// The following handlers take care of the mouseenter/mouseleave for the share button and the share area - if both are left then we close the share area
						handler_item_leave = function() {
							$more_sharing_button.data( 'hasitem', false );

							if ( $more_sharing_button.data( 'hasoriginal' ) === false ) {
								var timer = setTimeout( close_it, 800 );
								$more_sharing_button.data( 'timer2', timer );
							}
						};

						handler_item_enter = function() {
							$more_sharing_button.data( 'hasitem', true );
							clearTimeout( $more_sharing_button.data( 'timer2' ) );
						};

						handler_original_leave = function() {
							$more_sharing_button.data( 'hasoriginal', false );

							if ( $more_sharing_button.data( 'hasitem' ) === false ) {
								var timer = setTimeout( close_it, 800 );
								$more_sharing_button.data( 'timer2', timer );
							}
						};

						handler_original_enter = function() {
							$more_sharing_button.data( 'hasoriginal', true );
							clearTimeout( $more_sharing_button.data( 'timer2' ) );
						};

						close_it = function() {
							$more_sharing_pane.data( 'justSlid', true );
							$more_sharing_pane.slideUp( 200, function() {
								setTimeout( function() {
									$more_sharing_pane.data( 'justSlid', false );
								}, 300 );
							} );

							// Clear all hooks
							$more_sharing_button.unbind( 'mouseleave', handler_original_leave ).unbind( 'mouseenter', handler_original_enter );
							$more_sharing_pane.unbind( 'mouseleave', handler_item_leave ).unbind( 'mouseenter', handler_item_leave );
							return false;
						};
					}, 200 );

					// Remember the timer so we can detect it on the mouseout
					$more_sharing_button.data( 'timer', timer );
				}
			}, function() {
				// Mouse out - remove any timer
				$more_sharing_buttons.each( function() {
					clearTimeout( $( this ).data( 'timer' ) );
				} );
				$more_sharing_buttons.data( 'timer', false );
			} );
		}

		$( document ).click(function() {

			// Click outside
			// remove any timer
			$more_sharing_buttons.each( function() {
				clearTimeout( $( this ).data( 'timer' ) );
			} );
			$more_sharing_buttons.data( 'timer', false );

			// slide down forcibly
			$( '.sharedaddy .inner' ).slideUp();

		});

		// Add click functionality
		$( '.sharedaddy ul' ).each( function() {

			if ( 'yep' === $( this ).data( 'has-click-events' ) ) {
				return;
			}
			$( this ).data( 'has-click-events', 'yep' );

			var printUrl = function ( uniqueId, urlToPrint ) {
				$( 'body:first' ).append( '<iframe style="position:fixed;top:100;left:100;height:1px;width:1px;border:none;" id="printFrame-' + uniqueId + '" name="printFrame-' + uniqueId + '" src="' + urlToPrint + '" onload="frames[\'printFrame-' + uniqueId + '\'].focus();frames[\'printFrame-' + uniqueId + '\'].print();"></iframe>' );
			};

			// Print button
			$( this ).find( 'a.share-print' ).click( function() {
				var ref = $( this ).attr( 'href' ),
					do_print = function() {
						if ( ref.indexOf( '#print' ) === -1 ) {
							var uid = new Date().getTime();
							printUrl( uid , ref );
						} else {
							print();
						}
					};

				// Is the button in a dropdown?
				if ( $( this ).parents( '.sharing-hidden' ).length > 0 ) {
					$( this ).parents( '.inner' ).slideUp( 0, function() {
						do_print();
					} );
				} else {
					do_print();
				}

				return false;
			} );

			// Press This button
			$( this ).find( 'a.share-press-this' ).click( function() {
				var s = '';

				if ( window.getSelection ) {
					s = window.getSelection();
				} else if( document.getSelection ) {
					s = document.getSelection();
				} else if( document.selection ) {
					s = document.selection.createRange().text;
				}

				if ( s ) {
					$( this ).attr( 'href', $( this ).attr( 'href' ) + '&sel=' + encodeURI( s ) );
				}

				if ( !window.open( $( this ).attr( 'href' ), 't', 'toolbar=0,resizable=1,scrollbars=1,status=1,width=720,height=570' ) ) {
					document.location.href = $( this ).attr( 'href' );
				}

				return false;
			} );

			// Email button
			$( 'a.share-email', this ).on( 'click', function() {
				var url = $( this ).attr( 'href' );

				if ( $sharing_email.is( ':visible' ) ) {
					$sharing_email.slideUp( 200 );
				} else {
					$( '.sharedaddy .inner' ).slideUp();

					$( '#sharing_email .response' ).remove();
					$( '#sharing_email form' ).show();
					$( '#sharing_email form input[type=submit]' ).removeAttr( 'disabled' );
					$( '#sharing_email form a.sharing_cancel' ).show();

					// Reset reCATPCHA if exists.
					if ( 'object' === typeof grecaptcha && 'function' === typeof grecaptcha.reset ) {
						grecaptcha.reset();
					}

					// Show dialog
					$sharing_email.css( {
						left: $( this ).offset().left + 'px',
						top: $( this ).offset().top + $( this ).height() + 'px'
					} ).slideDown( 200 );

					// Hook up other buttons
					$( '#sharing_email a.sharing_cancel' ).unbind( 'click' ).click( function() {
						$( '#sharing_email .errors' ).hide();
						$sharing_email.slideUp( 200 );
						$( '#sharing_background' ).fadeOut();
						return false;
					} );

					// Submit validation
					$( '#sharing_email input[type=submit]' ).unbind( 'click' ).click( function() {
						var form = $( this ).parents( 'form' );

						// Disable buttons + enable loading icon
						$( this ).prop( 'disabled', true );
						form.find( 'a.sharing_cancel' ).hide();
						form.find( 'img.loading' ).show();

						$( '#sharing_email .errors' ).hide();
						$( '#sharing_email .error' ).removeClass( 'error' );

						if ( ! $( '#sharing_email input[name=source_email]' ).share_is_email() ) {
							$( '#sharing_email input[name=source_email]' ).addClass( 'error' );
						}

						if ( ! $( '#sharing_email input[name=target_email]' ).share_is_email() ) {
							$( '#sharing_email input[name=target_email]' ).addClass( 'error' );
						}

						if ( $( '#sharing_email .error' ).length === 0 ) {
							// AJAX send the form
							$.ajax( {
								url: url,
								type: 'POST',
								data: form.serialize(),
								success: function( response ) {
									form.find( 'img.loading' ).hide();

									if ( response === '1' || response === '2' || response === '3' ) {
										$( '#sharing_email .errors-' + response ).show();
										form.find( 'input[type=submit]' ).removeAttr( 'disabled' );
										form.find( 'a.sharing_cancel' ).show();

										if ( 'object' === typeof grecaptcha && 'function' === typeof grecaptcha.reset ) {
											grecaptcha.reset();
										}
									}
									else {
										$( '#sharing_email form' ).hide();
										$sharing_email.append( response );
										$( '#sharing_email a.sharing_cancel' ).click( function() {
											$sharing_email.slideUp( 200 );
											$( '#sharing_background' ).fadeOut();
											return false;
										} );
									}
								}
							} );

							return false;
						}

						form.find( 'img.loading' ).hide();
						form.find( 'input[type=submit]' ).removeAttr( 'disabled' );
						form.find( 'a.sharing_cancel' ).show();
						$( '#sharing_email .errors-1' ).show();

						return false;
					} );
				}

				return false;
			} );
		} );

		$( 'li.share-email, li.share-custom a.sharing-anchor' ).addClass( 'share-service-visible' );
	}
})( jQuery );


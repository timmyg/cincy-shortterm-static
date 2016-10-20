---
id: 203
title: Home
date: 2011-09-14T09:45:02+00:00
author: timmyg
layout: page
---


<div class="span12" data-motopress-wrapper-file="page-Portfolio3Cols-filterable.php" data-motopress-wrapper-type="content">
				<div class="row">
					<div class="span12" data-motopress-type="static" data-motopress-static-file="static/static-title.php">
						<section class="title-section">
	<h1 class="title-header">
					Properties	</h1>
	</section><!-- .title-section -->
					</div>
				</div>

<ul id="portfolio-grid" class="filterable-portfolio thumbnails portfolio-3cols isotope" data-cols="3cols" style="visibility: visible; position: relative; overflow: hidden; height: 442px;">


<script>
	jQuery(document).ready(function($) {
		var $container = $('#portfolio-grid'),
			items_count = $(".portfolio_item").size();

		$(window).load(function(){
			var selector = window.location.hash.replace( /^#category/, '.term' );

			if(selector == "#"){
				selector = '';
			}

			setColumnWidth();
			$container.isotope({
				itemSelector : '.portfolio_item',
				hiddenClass : 'portfolio_hidden',
				resizable : false,
				transformsEnabled : true,
				layoutMode: 'fitRows',
				filter: selector
			})

			$('#filters .active').removeClass('active')
			$('#filters li a[data-filter="'+selector+'"]').parent('li').addClass('active');
			change_hash(selector)
		});

		function getNumColumns(){
			var $folioWrapper = $('#portfolio-grid').data('cols');

			if($folioWrapper == '2cols') {
				var winWidth = $("#portfolio-grid").width(),
					column = 2;
				if (winWidth<380) column = 1;
				return column;
			}

			else if ($folioWrapper == '3cols') {
				var winWidth = $("#portfolio-grid").width(),
					column = 3;
				if (winWidth<380) column = 1;
				else if(winWidth>=380 && winWidth<788) column = 2;
				else if(winWidth>=788 && winWidth<1160) column = 3;
				else if(winWidth>=1160) column = 3;
				return column;
			}

			else if ($folioWrapper == '4cols') {
				var winWidth = $("#portfolio-grid").width(),
					column = 4;
				if (winWidth<380) column = 1;
				else if(winWidth>=380 && winWidth<788) column = 2;
				else if(winWidth>=788 && winWidth<1160) column = 3;
				else if(winWidth>=1160) column = 4;
				return column;
			}
		}

		function setColumnWidth(){
			var columns = getNumColumns(),
				containerWidth = $("#portfolio-grid").width(),
				postWidth = containerWidth/columns;
			postWidth = Math.floor(postWidth);

			$(".portfolio_item").each(function(index){
				$(this).css({"width":postWidth+"px"});
			});
		}

		function arrange(){
			setColumnWidth();
			$container.isotope('reLayout');
		}

		$(window).on("debouncedresize", function( event ) {
			arrange();
		});

		// Filter projects
		$('.filter a').click(function(){
			var $this = $(this).parent('li');
			// don't proceed if already active
			if ( $this.hasClass('active') ) {
				return;
			}


			var $optionSet = $this.parents('.filter');
			// change active class
			$optionSet.find('.active').removeClass('active');
			$this.addClass('active');

			var selector = $(this).attr('data-filter');
			$container.isotope({ filter: selector });
			change_hash(selector)

			var hiddenItems = 0,
				showenItems = 0;
			$(".portfolio_item").each(function(){
				if ( $(this).hasClass('portfolio_hidden') ) {
					hiddenItems++;
				};
			});

			showenItems = items_count - hiddenItems;
			if ( ($(this).attr('data-count')) > showenItems ) {
				$(".pagination__posts").css({"display" : "block"});
			} else {
				$(".pagination__posts").css({"display" : "none"});
			}
			return false;
		});
		function change_hash(hash){
			hash = hash.replace( /^.term/, 'category' );
			window.location.href = '#'+hash;

			$('.pagination a').each(function(){
				var item = $(this),
					href = item.attr('href'),
					end_slice = href.indexOf('#')==-1 ? href.length : href.indexOf('#') ;

				href = href.slice(0, end_slice);
				item.attr({'href':href+'#'+hash})
			})
		}
	});
</script>
  {% for post in site.posts %}
      	<li class="portfolio_item   isotope-item" style="width: 396px; left: 0px; top: 0px; transform: translate3d(0px, 0px, 0px);">
      		<div class="portfolio_item_holder">

      								<figure class="thumbnail thumbnail__portfolio"><a href="{{ post.hero_img | prepend: site.github.url }}" class="image-wrap" title="{{ post.title }}" style="display:block" rel="prettyPhoto[gallery1]"><img src="{{ post.hero_img | prepend: site.github.url }}" alt="nook-0"><span class="zoom-icon"></span></a></figure><!--/.thumbnail__portfolio-->										<a href="{{ post.hero_img | prepend: site.github.url }}" class="image-wrap" title="{{ post.title }}" style="display:none" rel="prettyPhoto[gallery1]"></a>					
      			<div class="caption caption__portfolio">
      									<h3><a href="{{ post.url  }}">{{ post.title }}</a></h3>
      									<p class="excerpt">{{ post.property_excerpt | strip_html }}</p>

      									<p><a href="{{ post.url | prepend: site.github.url }}" class="btn btn-primary">More info</a></p>
      							</div><!--/.caption__portfolio-->

      		</div><!--/.portfolio_item_holder-->
      	</li><!--/.portfolio_item-->
    {% endfor %}
	</ul>

</div>

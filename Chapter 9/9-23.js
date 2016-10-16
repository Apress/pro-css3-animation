(function(){
    var meny = document.querySelector( '.meny' );
    if (!meny || !meny.parentNode ) { return; }
    var menyWrapper = meny.parentNode;
    menyWrapper.className += ' meny-wrapper';
    var indentX = menyWrapper.offsetLeft,
    activateX = 40,
    deactivateX = meny.offsetWidth || 300,
    touchStartX = null,
    touchMoveX = null,
    isActive = false,
    isMouseDown = false;
    document.addEventListener( 'mousedown', onMouseDown, false );
    document.addEventListener( 'mouseup', onMouseUp, false );
    document.addEventListener( 'mousemove', onMouseMove, false );
    document.addEventListener( 'touchstart', onTouchStart, false );
    document.addEventListener( 'touchend', onTouchEnd, false );
    window.addEventListener( 'hashchange', onHashChange, false );
    onHashChange();
    document.documentElement.className += ' meny-ready';
    function onMouseDown( event ) { isMouseDown = true; }
    function onMouseMove( event ) {
        if( !isMouseDown ) { var x = event.clientX - indentX;
        if (deactivateX ) { deactivate(); }else if( x < activateX ) {activate(); } }
}
    function onMouseUp( event ) { isMouseDown = false; }
    function onTouchStart( event ) { touchStartX = event.touches[0].clientX - indentX;
    touchMoveX = null;
    if (isActive || touchStartX < activateX ) {
        document.addEventListener( 'touchmove', onTouchMove, false ); }
    }
function onTouchMove( event ) {
    touchMoveX = event.touches[0].clientX - indentX;
    if ( isActive && touchMoveX < touchStartX - activateX ) {
        deactivate(); event.preventDefault();
    }else if ( touchStartX < activateX && touchMoveX > touchStartX + activateX ) {
         activate();
        event.preventDefault(); } }
function onTouchEnd( event ) {
  document.addEventListener( 'touchmove', onTouchMove, false );
    if (touchMoveX === null ) {
        if (touchStartX > deactivateX ) { deactivate(); }
        else if (touchStartX < activateX * 2) { activate(); }}}
function onHashChange( event ) {
if( window.location.hash.match( 'fold' ) && !document.body.className.match( 'meny-fold' ) ) {
         addClass( document.body, 'meny-fold' );
        var clone = document.createElement( 'div' );
       clone.className = 'meny right';
clone.innerHTML = meny.innerHTML + '<div class="cover"></div>';
document.body.appendChild( clone );
addClass( meny, 'left' );
    } else {
removeClass( document.body, 'meny-fold' );
var clone = document.querySelector( '.meny.right' );
if (clone ) {
    clone.parentNode.removeChild( clone ); } } }
function activate() { if (isActive === false ) {
    isActive = true;
    addClass( document.documentElement, 'meny-active' ); }}
function deactivate() {
    if( isActive === true ) {
    isActive = false;
    removeClass( document.documentElement, 'meny-active' ); }
}
function addClass( element, name ) {
    element.className = element.className.replace( /\s+$/gi, '' ) + ' ' + name;         }
function removeClass( element, name ) {
    element.className = element.className.replace( name, '' );
} })();
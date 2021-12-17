let priceGlobal;

function OpeningTheOrderWindow ( price, text ) {

    const textInsertionLocation = document.querySelector( '.type_of_order>h1' );
    const placePriceInsertion = document.querySelector( '.cost__block>h1' );

    const scrollY = document.body.style.top;

    document.querySelector( '.order__popup' ).style.display = 'block';
    document.body.style.height = '100vh';
    document.body.style.overflowY = 'hidden';
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);

    if ( price === null && text === null ) {

        priceGlobal = 0;

        textInsertionLocation.innerHTML = 'Наименование продвижения не задано';
        placePriceInsertion.innerHTML = `$0`;
        
    } else {

        priceGlobal = price;

        textInsertionLocation.innerHTML = text;
        placePriceInsertion.innerHTML = `$${ price }`;

    }
    
}

function OpeningThePaymentWindow ( price = priceGlobal ) {

    const placePriceInsertion = document.querySelector( '.sum__block>h1' );

    const scrollY = document.body.style.top;

    document.querySelector( '.payment_method_popup' ).style.display = 'block';
    document.body.style.height = '100vh';
    document.body.style.overflowY = 'hidden';
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);

    placePriceInsertion.innerHTML = `$${ price }`;

}

function InstallationOfTheSelection( type, number ) {

    document.getElementById( `${ type }_purchase_bar__${ number }` ).style.background = 'linear-gradient( #27175E, #561A8D )';

    document.getElementById( `frame_enclosing_button__${ number }` ).classList.remove( 'frame_enclosing_button' );
    document.getElementById( `frame_enclosing_button__${ number }` ).classList.add( 'active_frame_enclosing_button' );

    document.getElementById( `order_button_block__${ number }` ).classList.add( 'active_order_button_block' );

    document.getElementById( `order_button_block__h3_${ number }` ).classList.remove( 'order_button_block__h3' );

    document.getElementById( `order_button_block__h3_${ number }` ).classList.add( 'active_button_block' );

    document.getElementById( `text_under_price__${ number }` ).style.color = 'rgb( 255, 255, 255 )';

}

function DismantlingTheSelection( type, number ) {

    document.getElementById( `${ type }_purchase_bar__${ number }` ).style.background = '#FFFFFF';

    document.getElementById( `frame_enclosing_button__${ number }` ).classList.remove( 'active_frame_enclosing_button' );
    document.getElementById( `frame_enclosing_button__${ number }` ).classList.add( 'frame_enclosing_button' );

    document.getElementById( `order_button_block__${ number }` ).classList.add( 'active_order_button_block' );
    document.getElementById( `order_button_block__${ number }` ).classList.remove( 'active_order_button_block' );

    document.getElementById( `order_button_block__h3_${ number }` ).classList.remove( 'active_button_block' );
    document.getElementById( `order_button_block__h3_${ number }` ).classList.add( 'order_button_block__h3' );

    document.getElementById( `text_under_price__${ number }` ).style.color = 'rgb(85, 85, 85)';

}
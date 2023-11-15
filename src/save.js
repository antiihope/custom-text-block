import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	getColorClassName,
} from '@wordpress/block-editor';

import classnames from 'classnames';
export default function save( { attributes } ) {
	const { text, textAlign, style, shadow, shadowOpacity } = attributes;

	const classes = classnames( `text-box-align-${ textAlign }`, {
		'has-shadow': shadow,
		[ `shadow-opacity-${ shadowOpacity } ` ]: shadow && shadowOpacity,
	} );
	const props = useBlockProps.save( {
		className: classes,
	} );
	return <RichText.Content { ...props } tagName="h2" value={ text } />;
}

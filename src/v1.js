import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	getColorClassName,
} from '@wordpress/block-editor';
import blockData from '../block.json';
import classnames from 'classnames';
const v1 = {
	supports: {
		html: false,
		color: {
			background: true,
			text: true,
			gradients: true,
		},
		spacing: {
			margin: true,
			padding: true,
			blockGap: true,
		},
	},
	attributes: {
		...blockData.attributes,
		text: {
			type: 'string',
			default: '',
			source: 'html',
			selector: 'h4',
		},
	},

	save: function save( { attributes } ) {
		const { text, textAlign, style, shadow, shadowOpacity } = attributes;

		const classes = classnames( `text-box-align-${ textAlign }`, {
			'has-shadow': shadow,
			[ `shadow-opacity-${ shadowOpacity } ` ]: shadow && shadowOpacity,
		} );
		const props = useBlockProps.save( {
			className: classes,
		} );
		return <RichText.Content { ...props } tagName="h3" value={ text } />;
	},
};
export default v1;

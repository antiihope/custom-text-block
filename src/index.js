import { registerBlockType, createBlock } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';
import v1 from './v1';

registerBlockType( 'blocks-course/text-box', {
	edit: Edit,
	save,
	deprecated: [ v1 ],
	variations: [
		{
			name: 'blocks-course/gradient-text-box',
			title: 'Gradient Text Box',
			icon: 'wordpress',
			attributes: {
				gradient: 'red-to-blue',
			},
		},
	],
	transforms: {
		from: [
			{
				type: 'block',
				blocks: [ 'core/paragraph' ],
				transform: ( { content, align } ) => {
					return createBlock( 'blocks-course/text-box', {
						text: content,
						textAlign: align,
					} );
				},
			},
			{
				type: 'enter',
				regExp: /textbox/i,
				transform: ( attributes ) => {
					return createBlock( 'blocks-course/text-box' );
				},
			},
			{
				type: 'prefix',
				prefix: 'textbox',
				transform: ( attributes ) => {
					return createBlock( 'blocks-course/text-box' );
				},
			},
		],
		to: [
			{
				type: 'block',
				blocks: [ 'core/paragraph' ],
				isMatch: ( { text, textAlign } ) => {
					return text && textAlign;
				},
				transform: ( { text, textAlign } ) => {
					return createBlock( 'core/paragraph', {
						content: text,
						align: textAlign,
					} );
				},
			},
		],
	},
} );

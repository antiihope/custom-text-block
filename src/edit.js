import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
} from '@wordpress/block-editor';
import './editor.scss';
import classnames from 'classnames';

import { PanelBody, RangeControl } from '@wordpress/components';
export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { text, textAlign, style, shadow, shadowOpacity } = attributes;

	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { textAlign: newAlignment } );
	};
	const onChangeText = ( newText ) => {
		setAttributes( { text: newText } );
	};

	const classes = classnames( `text-box-align-${ textAlign }`, {
		'has-shadow': shadow,
		[ `shadow-opacity-${ shadowOpacity } ` ]: shadow && shadowOpacity,
	} );
	const toggleShadow = () => {
		setAttributes( { shadow: ! shadow } );
	};
	const onChangeShadowOpacity = ( newOpacity ) => {
		setAttributes( { shadowOpacity: newOpacity } );
	};

	return (
		<>
			<InspectorControls>
				{ shadow && (
					<PanelBody title={ __( 'Shadow Settings', 'text-box' ) }>
						<RangeControl
							label={ __( 'Opacity', 'text-box' ) }
							value={ shadowOpacity }
							onChange={ onChangeShadowOpacity }
							min={ 10 }
							max={ 40 }
							step={ 10 }
						/>
					</PanelBody>
				) }
			</InspectorControls>
			<BlockControls
				controls={ [
					{
						icon: 'admin-page',
						title: __( 'Toggle Shadow', 'text-box' ),
						isActive: shadow,
						onClick: toggleShadow,
					},
				] }
			>
				<AlignmentToolbar
					value={ textAlign }
					onChange={ onChangeAlignment }
				/>
			</BlockControls>
			<div
				{ ...useBlockProps( {
					className: classes,
					style: {
						borderStyle: style,
					},
				} ) }
			>
				<RichText
					className="text-box-title"
					onChange={ onChangeText }
					value={ text }
					placeholder={ __( 'Your Text', 'text-box' ) }
					tagName="h2"
					allowedFormats={ [] }
				/>
			</div>
		</>
	);
}

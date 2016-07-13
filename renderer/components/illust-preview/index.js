// @flow
import React, {Component} from 'react';
import cssModules from 'react-css-modules';
import styles from './illust-preview.css';

type Props = {
	title: string,
	img: string,
	show: bool,
	styles: Object,
	onClose: () => void
};

class IllustPreview extends Component {
	props: Props;

	state: {
		isLoad: bool
	};

	constructor(props: Props) {
		super(props);
		this.state = {
			isLoad: false
		};
	}

	handleOnClose = () => {
		this.props.onClose();
	};

	handleImgLoad = () => {
		this.setState({isLoad: true});
	};

	handleImgUnload = () => {
		this.setState({isLoad: false});
	};

	render() {
		const imgStyle = this.state.isLoad ? 'loaded' : '';
		return (
			<div styleName="base" onClick={this.handleOnClose}>
				<img
					src={this.props.img}
					onLoad={this.handleImgLoad}
					onUnLoad={this.handleImgUnload}
					styleName={imgStyle}
					/>
			</div>
		);
	}
}

export default cssModules(IllustPreview, styles);
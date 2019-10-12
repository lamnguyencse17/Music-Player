import React, { Component } from "react";
import { connect } from "react-redux";
import { updateProgress } from "../../../../actions/control";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Slider, Direction } from 'react-player-controls'

const WHITE_SMOKE = '#eee'
const GRAY = '#878c88'
const GREEN = '#347deb'

const SliderBar = ({ direction, value, style }) => (<div
style={Object.assign({}, {
  position: 'absolute',
  background: GRAY,
  borderRadius: 4,
}, direction === Direction.HORIZONTAL ? {
  top: 0,
  bottom: 0,
  left: 0,
  width: `${value * 100}%`,
} : {
  right: 0,
  bottom: 0,
  left: 0,
  height: `${value * 100}%`,
}, style)}
/>)
const SliderHandle = ({ direction, value, style }) => (<div
style={Object.assign({}, {
  position: 'absolute',
  width: 16,
  height: 16,
  background: GREEN,
  borderRadius: '100%',
  transform: 'scale(1)',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.3)',
  }
}, direction === Direction.HORIZONTAL ? {
  top: 0,
  left: `${value * 100}%`,
  marginTop: -4,
  marginLeft: -8,
} : {
  left: 0,
  bottom: `${value * 100}%`,
  marginBottom: -8,
  marginLeft: -4,
}, style)}
/>)

class SlideBar extends Component {
    static propTypes = {
        musics: PropTypes.array.isRequired,
        playing: PropTypes.bool.isRequired,
        playMode: PropTypes.number.isRequired,
        shuffle: PropTypes.bool.isRequired,
        lastplayed: PropTypes.object,
    };
    constructor(props){
        super(props);
        this.state = {
          lastIntent: 0,
          lastValueStart: 0,
          lastValueEnd: 0,
          lastIntentEndCount: 0,
          lastIntentStart: 0,
          value: 0,
        }
    }
    render() {
        return (
            <Slider
                isEnabled={this.props.playing}
                direction={Direction.HORIZONTAL}
               onChange={newValue => {
                 this.props.updateProgress(newValue*100)
                }}
                onChangeStart={startValue => this.setState(() => ({ lastValueStart: startValue }))}
                onChangeEnd={endValue => this.setState(() => ({ lastValueEnd: endValue }))}
                onIntent={intent => this.setState(() => ({ lastIntent: intent }))}
                onIntentStart={intent => this.setState(() => ({ lastIntentStart: intent }))}
                onIntentEnd={() => this.setState(() => ({ lastIntentEndCount: this.state.lastIntentEndCount + 1 }))}
                style={{
                    width: 200,
                    height: 8,
                    borderRadius: 4,
                    background: WHITE_SMOKE,
                    transition: 'width 0.1s',
                    cursor: this.isEnabled === true ? 'pointer' : 'default',
                  }}
            >
                <SliderBar
                    direction={Direction.HORIZONTAL}
                    value={this.props.progress/100}
                    style={{ background: this.props.playing ? '#347deb' : '#878c88' }}
                />
                <SliderBar
                    direction={Direction.HORIZONTAL}
                    value={this.state.lastIntent}
                    style={{ background: 'rgba(0, 0, 0, 0.05)' }}
                />
                <SliderHandle
                    direction={Direction.HORIZONTAL}
                    value={this.props.progress/100}
                    style={{ background: this.props.playing ? '#347deb' : '#878c88' }}
                />
            </Slider>
        );
    }
}

function mapStateToProps(state) {
    return {
      musics: state.musics.musics,
      playing: state.control.playing,
      playMode: state.control.playMode,
      shuffle: state.control.shuffle,
      lastplayed: state.control.lastplayed,
      progress: state.control.progress
    };
  }
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateProgress}, dispatch);
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SlideBar);
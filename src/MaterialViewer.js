import React from 'react';
import PropTypes from 'prop-types';
import MaterialButtonBar from './MaterialButtonBar';
import { STATE_SELECTED } from './state';
import {
  toDisplayCutSpeed,
  toDisplayEngraveSpeed,
  toDisplayLinesPerInch,
  toDisplayPower,

} from './lib/glowforgeUnits';
import {
  precisionRound,
} from './lib/utils';

function toDisplayPowerWords(power) {
  return (power === 100) ? 'Max' : toDisplayPower(power);
}

class MaterialViewer extends React.Component {
  render() {

    const {
      action,
      material,
    } = this.props;

    if (action !== STATE_SELECTED) {
      return null;
    }

    return (
      <React.Fragment>
        <div className="App-field">
          {`Thickness Name ${material.thickName}`}
        </div>
        <div className="App-field">
          {`Material Name: ${material.name}`}
        </div>
        <div className="App-field">
          {`Thickness (mm) ${material.thickness}`}
        </div>

        <div className="App-field">
          <p>Cut Settings</p>
        </div>
        <div className="App-field">
          {`Speed ${toDisplayCutSpeed(material.cut.speed)} (${precisionRound(material.cut.speed, 2)})`}
        </div>
        <div className="App-field">
          {`Power ${toDisplayPowerWords(material.cut.power)} (${precisionRound(material.cut.power, 2)})`}
        </div>
        <div className="App-field">
          {`Passes ${material.cut.passes}`}
        </div>
        <div className="App-field">
          {`Focal Offset ${material.cut.focalOffset}`}
        </div>

        <div className="App-field">
          <p>Score Settings</p>
        </div>
        {
          (material.scores.length > 0) ?
          material.scores.map((score, index) => {
            return (
              <React.Fragment>
                <div className="App-field" style={(index !== 0) ? { marginTop: '10px' } : null}>
                  {`Name ${score.name}`}
                </div>
                <div className="App-field">
                {`Speed ${toDisplayCutSpeed(score.speed)} (${precisionRound(score.speed, 2)})`}
                </div>
                <div className="App-field">
                  {`Power ${toDisplayPowerWords(score.power)} (${precisionRound(score.power, 2)})`}
                </div>
                <div className="App-field">
                  {`Passes ${score.passes}`}
                </div>
                <div className="App-field" style={{marginBottom: '10px'}}>
                  {`Focal Offset ${score.focalOffset}`}
                </div>
              </React.Fragment>
            );
          }) : 'None'
        }

        <div className="App-field">
          <p>Vector Engrave Settings</p>
        </div>
        {
          (material.vectors.length > 0) ?
          material.vectors.map((vector, index) => {
            return (
              <React.Fragment>
                <div className="App-field" style={(index !== 0) ? { marginTop: '10px' } : null}>
                  {`Name ${vector.name}`}
                </div>
                <div className="App-field">
                  {`Speed ${toDisplayEngraveSpeed(vector.speed)} (${precisionRound(vector.speed, 2)})`}
                </div>
                <div className="App-field">
                {`Power ${toDisplayPowerWords(vector.power)} (${precisionRound(vector.power, 2)})`}
                </div>
                <div className="App-field">
                  {`Passes ${vector.passes}`}
                </div>
                <div className="App-field">
                  {`Focal Offset ${vector.focalOffset}`}
                </div>
                <div className="App-field" style={{marginBottom: '10px'}}>
                  {`Scan Gap ${vector.scanGap}, LPI ${toDisplayLinesPerInch(vector.scanGap)}`}
                </div>
              </React.Fragment>
            );
          }) : 'None'
        }

        <div className="App-field">
          <p>Bitmap Engrave Settings</p>
        </div>
        {
          (material.bitmaps.length > 0) ?
          material.bitmaps.map((bitmap, index) => {
            return (
              <React.Fragment>
                <div className="App-field" style={(index !== 0) ? { marginTop: '10px' } : null}>
                  {`Name ${bitmap.name}`}
                </div>
                <div className="App-field">
                  {`Speed ${toDisplayEngraveSpeed(bitmap.speed)} (${precisionRound(bitmap.speed, 2)})`}
                </div>
                <div className="App-field">
                {`Power ${toDisplayPowerWords(bitmap.power)} (${precisionRound(bitmap.power, 2)})`}
                </div>
                <div className="App-field">
                  {`Passes ${bitmap.passes}`}
                </div>
                <div className="App-field">
                  {`Focal Offset ${bitmap.focalOffset}`}
                </div>
                <div className="App-field" style={{marginBottom: '10px'}}>
                  {`Scan Gap ${bitmap.scanGap}, LPI ${toDisplayLinesPerInch(bitmap.scanGap)}`}
                </div>
              </React.Fragment>
            );
          }) : 'None'
        }

        <MaterialButtonBar
          action={this.props.action}
          cancelMaterial={this.props.cancelMaterial}
        />
      </React.Fragment>
    );
  }
}

MaterialViewer.propTypes = {
  action: PropTypes.string.isRequired,
  cancelMaterial: PropTypes.func.isRequired,
  material: PropTypes.object.isRequired,
}

export default MaterialViewer;

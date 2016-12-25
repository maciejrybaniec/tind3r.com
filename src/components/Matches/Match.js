import React, { Component } from 'react';
import CSSModules from 'react-css-modules'
import autobind from 'autobind-decorator'
import _ from 'lodash'
import cx from 'classnames'
import { observer } from 'mobx-react'
import styles from './match.scss'
import MatchStore from '../../stores/MatchStore'
import Data from '../../data'

@observer
@CSSModules(styles)
export default class Match extends Component {
  constructor(props) {
    super(props)
  }

  @autobind
  handleSelect() {
    const { match } = this.props
    this.props.handleSelect(match.id)
  }

  @autobind
  remove() {
    const { match } = this.props
    Data.db().matches.where('_id').equals(match.id).delete()
  }

  renderIcon() {
    const { match } = this.props

    if (!match.messageStore.last.message) {
      return null
    }

    if (match.messageStore.last.isAuthor) {
      return <i className="fa fa-arrow-down" aria-hidden="true" />
    }

    return <i className="fa fa-arrow-up" aria-hidden="true"></i>
  }

  render() {
    const { match } = this.props
    const className = cx({
      unread: match.isNew,
    })
    return (
      <div styleName="match" className={className} onClick={this.handleSelect}>
        <div styleName="avatar">
          <img src={match.user.photos[0].url} />
        </div>
        <div styleName="name">{match.user.name}</div>
        <div styleName="message">{this.renderIcon()} {match.messageStore.last.message}</div>
        <div styleName="date">{match.date}</div>
      </div>
    );
  }
}
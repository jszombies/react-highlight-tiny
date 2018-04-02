import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegexpUtil from './RegexpUtils';

class SearchItems extends PureComponent {
  /**
   * Digest tree/array structure to array of links
   * @param {Array} items to prepare
   * @returns {Array} array of filtered items
   */
  extractLinks = items => (
    (items && items.reduce((result, item) => result.concat([
      { label: item.label, href: item.link },
      ...this.extractLinks(item.children),
    ]), [])) || []
  )

  /**
   * @param {String} query String from search input
   * @param {Array} tree items in various structures
   * @returns {Array} list of filtered and highlighted list
   */
  filterItems = (query, tree) => {
    if (!query.trim().length) {
      return [];
    }
    const links = this.extractLinks(tree);
    const regexp = new RegExp(RegexpUtil.escape(query), 'ig');

    return links
      .filter(link => regexp.test(link.label))
      .filter((link, index) => index < this.props.limit)
      .map((link, idx) => {
        const matches = link.label.match(regexp);

        return (
          <a
            key={`item-${idx}`}
            href={link.href}
            className={this.props.theme.searchItem}
          >
            <span>
              {link.label.split(regexp)
                .reduce((result, part, index) => (
                  [
                    ...result,
                    <i key={`i-part-${idx}-${index}`}>{part}</i>,
                    matches && index < matches.length && (
                      <b key={`b-part-${idx}-${index}`}>{matches[index]}</b>
                    ),
                  ]
                ), [])
              }
            </span>
          </a>
        );
      });
  }

  renderEmptyDataMessage = () => (
    <div
      className={this.props.theme.searchItem}
      disabled
    >
      <span className={this.props.theme.empty}>Nothing to show</span>
    </div>
  );

  render() {
    const filteredLabels = this.filterItems(this.props.query, this.props.items);

    return (
      <div>
        {filteredLabels.length > 0
          ? filteredLabels
          : this.renderEmptyDataMessage()
        }
      </div>
    );
  }
}

SearchItems.defaultProps = {
  limit: 10,
  theme: {},
};

SearchItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    link: PropTypes.string,
  })).isRequired,
  query: PropTypes.string.isRequired,
  limit: PropTypes.number,
  theme: PropTypes.object, // eslint-disable-line
};

export default SearchItems;

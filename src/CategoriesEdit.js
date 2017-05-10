import React, {Component} from 'react';
import './Categories.css';
import CategoryItemEdit from './CategoryItemEdit';

class CategoriesEdit extends Component {

    render() {

        const level = this.props.list.filter((category) => {
                return category.parentId === null;
            }
        );

        // const categoryItems = this.props.list.map((category) =>
        const categoryItems = level.map((category) =>

            <CategoryItemEdit key={category.id.toString()}
                          item={category}
                          onSelect={this.props.actionSelect}
                          isActive={this.props.isActive}
                          actionAddSubcategory={this.props.actionAddSubcategory}
                          actionUpdateCategory={this.props.actionUpdateCategory}
                          categories={this.props.list}
                              router={this.props.router}

            />
        );

        return (

            <section className="categories">
                <ul className="category-list">
                    {categoryItems}
                </ul>
            </section>
        );
    }
}

export default CategoriesEdit;

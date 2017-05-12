/**
 * Created by Katarzyna_Bak on 28.03.2017.
 */

import React, {Component} from 'react';
import './Categories.css';
import CategoryItem from './CategoryItem';

class Categories extends Component {

    constructor (props) {
        super(props);

        this.state = {
            newCategoryInputText: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddCategory = this.handleAddCategory.bind(this);

    }

    handleInputChange (e) {
        this.setState({newCategoryInputText: e.target.value});
    }

    handleAddCategory () {
        const category = {
            name: this.state.newCategoryInputText
        };
        this.props.categoryAction.actionAdd(category);
    }
    render() {

        const level = this.props.list.filter((category) => {
                return category.parentId === null;
            }
        );

        const categoryItems = level.map((category) =>

            <CategoryItem key={category.id.toString()}
                          item={category}
                          categoryAction={this.props.categoryAction}
                          //onSelect={this.props.actionSelect}
                          // isActive={this.props.isActive}
                          //actionAddSubcategory={this.props.actionAddSubcategory}
                          //actionUpdateCategory={this.props.actionUpdateCategory}
                          categories={this.props.list}
                          router={this.props.router}
            />
        );

        return (

            <section className="categories">
                <div className="categories-add-form">
                    <input type="text" placeholder="Enter category title"
                           value={this.state.newCategoryInputText}
                           onChange={this.handleInputChange}
                    />
                    <button type="button" onClick={this.handleAddCategory}>Add</button>
                </div>

                <ul className="category-list">
                    {categoryItems}
                </ul>
            </section>
        );
    }
}

export default Categories;

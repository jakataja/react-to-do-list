/**
 * Created by Katarzyna_Bak on 28.03.2017.
 */

import React, {Component} from 'react';
import './Categories.css';
import CategoryItem from './CategoryItem';

class Categories extends Component {

    render() {

        const categoryItems = this.props.list.map((category) =>
            <CategoryItem key={category.num.toString()}
                          item={category}
                          onSelect={this.props.actionSelect}
                          isActive={this.props.isActive}/>
        );

        return (

            <section className="categories">
                <div className="categories-add-form">
                    <input type="text" placeholder="Enter category title"
                           value={this.props.inputValue}
                           onChange={this.props.actionChange}
                           ref={input => { this.addInput = input }}/>
                    <button type="button" onClick={this.props.actionAdd}>Add</button>
                </div>

                <ul className="category-list">
                    {categoryItems}
                </ul>
            </section>
        );
    }
}

export default Categories;

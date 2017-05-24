import React from 'react';
import './Categories.css';
import CategoryItemEdit from './CategoryItemEdit';

const CategoriesEdit = ({ categories, taskId, onMoveTask }) => {

        const level = categories.filter((category) => {
                return category.parentId === null;
            }
        );

        // const categoryItems = this.props.list.map((category) =>
        const categoryItems = level.map(category =>

            <CategoryItemEdit key={category.id.toString()}
                          {...category}
                          // onSelect={this.props.actionSelect}
                          // isActive={this.props.isActive}
                          categories={categories}
                              onMoveTask={ () => onMoveTask(taskId, category.id) }

            />
        );

        return (

            <section className="categories">
                <ul className="category-list">
                    {categoryItems}
                </ul>
            </section>
        );

};

export default CategoriesEdit;

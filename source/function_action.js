/**
 * Created by magic_000 on 30/07/2017.
 */
var functionAction = {
    addTodo: function (message) {
        return {
            type: "ADD_TODO",
            message: message,
            completed: false
        }
    },
    completeTodo: function (index) {
        return {
            type: "COMPLETE_TODO",
            index: index
        }
    },
    deleteTodo: function (index) {
        return {
            type: 'DELETE_TODO',
            index: index
        }
    },

    clearTodo: function () {
        return {
            type: 'CLEAR_TODO'
        };
    }
};

export default functionAction;
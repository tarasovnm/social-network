const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const initialState = {
    users: [
        {
            "name": "test_01",
            "id": 12991,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "_ADjo_",
            "id": 12990,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "Adjo",
            "id": 12989,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": true
        }
    ]
};

const usersReducer = (state = initialState, action) => {
    const changeUserFollowedStatus = (users, userId, followed) => {
        return users.map(u => {
            if (u.id === userId) {
                return {...u, followed: followed}
            }
            return u;
        });
    }

    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                users: changeUserFollowedStatus(state.users, action.userID, true)
            }
        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});

export default usersReducer;
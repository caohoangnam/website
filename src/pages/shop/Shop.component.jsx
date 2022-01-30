import React from 'react'
import { Route } from "react-router-dom";
import CollectionPage from '../collection/collection.component'
import CollectionOverview from '../../components/collections-overview/collections-overview.component'
import { connect } from 'react-redux'
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class Shop extends React.Component {

    state = {
        loading: true
    }

    render() {
        const { match } = this.props
        const { loading } = this.state
        return (
            <div className="shop-page" >
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
})
export default connect(null, mapDispatchToProps)(Shop)

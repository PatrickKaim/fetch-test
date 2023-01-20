import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import {fetch, Headers} from "meteor/fetch";

export const LinksCollection = new Mongo.Collection('links')

if (Meteor.isServer) {
  Meteor.publish('links', function () {
    const header = new Headers();
    return LinksCollection.find({})
  })
}

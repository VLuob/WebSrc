import Vue from 'vue'
import VueRouter from 'vue-router'

const control = () => import('@/components/control.vue')
const deviceList = () => import('@/components/DeviceList.vue')
const channelList = () => import('@/components/channelList.vue')
const pushVideoList = () => import('@/components/PushVideoList.vue')
const streamProxyList = () => import('@/components/StreamProxyList.vue')
const devicePosition = () => import('@/components/devicePosition.vue')
const login = () => import('@/components/Login.vue')
const parentPlatformList = () => import('@/components/ParentPlatformList.vue')
const cloudRecord = () => import('@/components/CloudRecord.vue')
const mediaServerManger = () => import('@/components/MediaServerManger.vue')
const test = () => import('@/components/test.vue')
const web = () => import('@/components/setting/Web.vue')
const sip = () => import('@/components/setting/Sip.vue')
const media = () => import('@/components/setting/Media.vue')
const live = () => import('@/components/live.vue')

const wasmPlayer = () => import('@/components/dialog/jessibuca.vue')
const rtcPlayer = () => import('@/components/dialog/rtcPlayer.vue')

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)


export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: control,
    },
    {
      path: '/live',
      component: live,
    },
    {
      path: '/deviceList',
      component: deviceList,
    },
    {
      path: '/pushVideoList',
      component: pushVideoList,
    },
    {
      path: '/streamProxyList',
      component: streamProxyList,
    },
    {
      path: '/login',
      name: '登录',
      component: login,
    },
    {
      path: '/channelList/:deviceId/:parentChannelId/:count/:page',
      name: 'channelList',
      component: channelList,
    },
    {
      path: '/parentPlatformList/:count/:page',
      name: 'parentPlatformList',
      component: parentPlatformList,
    },
    {
      path: '/devicePosition/:deviceId/:parentChannelId/:count/:page',
      name: 'devicePosition',
      component: devicePosition,
    },
    {
      path: '/cloudRecord',
      name: 'cloudRecord',
      component: cloudRecord,
    },
    {
      path: '/mediaServerManger',
      name: 'mediaServerManger',
      component: mediaServerManger,
    },
    {
      path: '/setting/web',
      name: 'web',
      component: web,
    },
    {
      path: '/setting/sip',
      name: 'sip',
      component: sip,
    },
    {
      path: '/setting/media',
      name: 'media',
      component: media,
    },
    {
      path: '/test',
      name: 'test',
      component: test,
    },
    {
      path: '/play/wasm/:url',
      name: 'wasmPlayer',
      component: wasmPlayer,
    },
    {
      path: '/play/rtc/:url',
      name: 'rtcPlayer',
      component: rtcPlayer,
    },
  ]
})

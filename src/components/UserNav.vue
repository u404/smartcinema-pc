<template>
  <div class="user-nav" :class="{'user-nav--login':userData.uToken}">
    <router-link class="menu menu-sign-in" v-if="!userData.uToken" @click.native="onClick" :to="signRouteTo">{{$i18n._(signInRoute.title)}}</router-link>
    <DropdownMenu v-else>
      <span class="menu menu-user"><i class="icon-user" :style="{ 'background-image': userData.uImage ? `url(${userData.uImage})` : '' }"></i>{{userData.uNickname}}</span>
      <div class="btn signout-btn" slot="childMenu" slot-scope="data" @click.stop="signOut(data.close)">{{$i18n._('Sign out')}}</div>
    </DropdownMenu>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"
import DropdownMenu from "./DropdownMenu"
import { signInRoute } from "@/router"
import logger from "@/logger"
export default {
  components: {
    DropdownMenu
  },
  data () {
    return {
      signInRoute
    }
  },
  computed: {
    ...mapState(["userData"]),
    signRouteTo () {
      if (this.$route.name === signInRoute.name) {
        return { name: signInRoute.name, query: this.$route.query }
      }
      return { name: signInRoute.name, query: { from: location.hash.slice(1) } }
    }
  },
  methods: {
    ...mapActions(["setLoginState"]),
    signOut (close) {
      this.setLoginState()
      close()
      location.reload()
    },
    onClick () {
      logger.log("sign_in", { page_url: this.$route.query.from.slice(1) })
      console.log("SignIn onClick")
    }
  }
}
</script>

<style lang="scss" scoped>
.user-nav {
  @include flex($jus: flex-start);
  .menu {
    margin-left: 30px;
    @include font(13, 20);
    font-weight: bold;
    color: #1B1D1F;
    // color: $color-dark;
    &:first-child {
      margin-left: 0;
    }

    &.router-link-active {
      font-weight: bold;
      color: $color-dark;
    }

    @include flex();

    &-sign-in {
      background: #FFFFFF;
      border-radius: 50px;
      padding: 4px 9px;
    }

    &-user {
      font-weight: normal;
      color: #FFFFFF;
      .icon-user {
        display: inline-block;
        margin-right: 24px;
        width: 32px;
        height: 32px;
        background: url(https://g.smartcinemausa.com/images/2ad51d4be6f14e73a7923d8f6fdb4d46-88-88.png) center left no-repeat;
        background-size: contain;
        line-height: 32px;
      }
    }

  }

  /deep/ .dropdown-menu-active .menu {
    font-weight: bold;
    color: #ffffff;
  }
  .signout-btn {
    width: 130px;
    height: 40px;
    @include font(16, 22);
    font-weight: bold;
    color: $color-darkest;
  }
}

@include screen-mobile {
  .user-nav {
    .menu{
      @include font-m(13, 18);

      &-sign-in {
        background: #FFFFFF;
        padding: rem(6) rem(8);
        border-radius: rem(2);
      }

      &-user {
        @include font-m(12, 17);
        font-weight: normal;
        .icon-user {
          margin-right: rem(4);
          width: rem(26);
          height: rem(26);
          @include font-m(12, 26);
        }
      }
    }
  }

}
</style>

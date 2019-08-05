<template>
<div
    id="app"
    class="admin-template"
>
    <div class="admin-template__container">
        <div class="admin-template__sidebar">
            <container>
                sidebar
            </container>
        </div>
        <div class="admin-template__content">
            <container
                theme="light"
                :has-gradient="false"
            >
                Contenuto
            </container>
        </div>
    </div>
</div>
</template>

<script>
import {
    Container,
}
from './components'
export default {
    name: 'app',
    components: {
        Container,
    }
}
</script>

<style lang="scss">
@import '~styles/shared';

.admin-template {
    &__container {
        display: flex;
        height: 100%;
        min-height: 100vh;
    }

    &__sidebar {
        width: 200px;
        padding: ($spacer * 5) $spacer $spacer;
        z-index: 2;
        @include custom-box-shadow(lighten($black, 25));
        @include gradient-directional($gray-100, lighten($gray-200, 10), 145deg);
    }

    &__content {
        padding: ($spacer * 6) ($spacer * 2) ($spacer * 2);
        width: 100%;
        @include gradient-directional(lighten($blue, 35), lighten($blue, 40), 145deg);
    }
}
</style>

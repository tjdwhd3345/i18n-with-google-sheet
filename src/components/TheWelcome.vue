<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>
<script>
  export default {
    mounted() {
      const i18nHead = this.$t(`intro.tooling.head`)
      const toolingLink = this.$t(`intro.tooling.link`, { returnObjects: true, sss: 'Vite' })
    }
  }
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>{{ $t('intro.documentation.head') }}</template>

    <div v-html="$t('intro.documentation.content')"/>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>{{ $t('intro.tooling.head') }}</template>

    <div v-html="$t('intro.tooling.content')" />
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>{{$t('intro.echosystem.head')}}</template>

    {{$t('intro.echosystem.content')}}
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>{{ $t('intro.community.head')}}</template>

    <div v-html="$t('intro.community.content')" />
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>{{ $t('intro.support.head')}}</template>

    <div v-html="$t('intro.support.content')"/>
  </WelcomeItem>
</template>

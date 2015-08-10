<GameProjectFile>
  <PropertyGroup Type="Layer" Name="start" ID="026d254a-7cb1-4eac-b24c-0605008b57f7" Version="2.2.8.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="60" Speed="1.0000">
        <Timeline ActionTag="1497556672" Property="Position">
          <PointFrame FrameIndex="60" X="384.3243" Y="519.6996" />
        </Timeline>
        <Timeline ActionTag="1497556672" Property="Scale">
          <ScaleFrame FrameIndex="0" X="0.9000" Y="0.9000" />
          <ScaleFrame FrameIndex="30" X="1.0000" Y="1.0000" />
          <ScaleFrame FrameIndex="60" X="0.9000" Y="0.9000" />
        </Timeline>
        <Timeline ActionTag="1497556672" Property="RotationSkew">
          <ScaleFrame FrameIndex="60" X="0.0000" Y="0.0000" />
        </Timeline>
        <Timeline ActionTag="1497556672" Property="FrameEvent">
          <EventFrame FrameIndex="0" Tween="False" Value="playBtnStart" />
          <EventFrame FrameIndex="30" Tween="False" Value="" />
          <EventFrame FrameIndex="60" Tween="False" Value="startBtnOver" />
        </Timeline>
      </Animation>
      <ObjectData Name="Layer" Tag="7" ctype="GameLayerObjectData">
        <Size X="720.0000" Y="1280.0000" />
        <Children>
          <AbstractNodeData Name="playBtn" ActionTag="1497556672" Tag="6" FrameEvent="startBtnOver" IconVisible="False" LeftMargin="225.3243" RightMargin="176.6757" TopMargin="711.8004" BottomMargin="471.1996" TouchEnable="True" FontSize="14" Scale9Enable="True" Scale9Width="318" Scale9Height="97" ctype="ButtonObjectData">
            <Size X="318.0000" Y="97.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="384.3243" Y="519.6996" />
            <Scale ScaleX="0.9000" ScaleY="0.9000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5338" Y="0.4060" />
            <PreSize X="0.4417" Y="0.0758" />
            <TextColor A="255" R="65" G="65" B="70" />
            <DisabledFileData Type="MarkedSubImage" Path="res/startbtn_press.png" Plist="res.plist" />
            <PressedFileData Type="MarkedSubImage" Path="res/startbtn_press.png" Plist="res.plist" />
            <NormalFileData Type="MarkedSubImage" Path="res/startbtn.png" Plist="res.plist" />
          </AbstractNodeData>
          <AbstractNodeData Name="txt_tip_1" ActionTag="-1827704708" Tag="7" IconVisible="False" LeftMargin="56.8456" RightMargin="49.1544" TopMargin="446.7289" BottomMargin="641.2711" ctype="SpriteObjectData">
            <Size X="614.0000" Y="192.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="363.8456" Y="737.2711" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5053" Y="0.5760" />
            <PreSize />
            <FileData Type="MarkedSubImage" Path="res/txt_tip.png" Plist="res.plist" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameProjectFile>